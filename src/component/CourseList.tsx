import { useCourseStore } from "../store/courseStore";
import DropButton from "./DropButton";

export default function CourseList() {
  const courses = useCourseStore((state) => state.courses);
  const gpa = useCourseStore((state) => state.calculateGPA)();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">รายวิชาที่ลงทะเบียน</h2>
      <ul className="space-y-2">
        {courses.map((c) => (
          <li key={c.id} className="border p-2 flex justify-between">
            <span>{c.code} - {c.nameTH} ({c.credit} หน่วยกิต) | เกรด: {c.grade}</span>
            <DropButton id={c.id} />
          </li>
        ))}
      </ul>
      <p className="mt-2 font-semibold">GPA: {gpa !== null ? gpa.toFixed(2) : "-"}</p>
    </div>
  );
}
