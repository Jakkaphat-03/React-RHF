import { create } from "zustand";

// Grade point mapping
const gradePoints: Record<string, number | null> = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0.0,
  W: null, // ถอน ไม่คิดเกรด
};

export interface Course {
  id: string;
  code: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string;
}

interface CourseState {
  courses: Course[];
  dropped: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  calculateGPA: () => number | null;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  dropped: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, { ...course, grade: "W" }],
      };
    }),
  calculateGPA: () => {
    const { courses } = get();
    const valid = courses.filter((c) => gradePoints[c.grade] !== null);
    if (valid.length === 0) return null;
    const totalCredits = valid.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = valid.reduce(
      (sum, c) => sum + (gradePoints[c.grade]! * c.credit),
      0
    );
    return totalPoints / totalCredits;
  },
}));
