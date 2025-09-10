import { useCourseStore } from "../store/courseStore";

export default function DropButton({ id }: { id: string }) {
  const dropCourse = useCourseStore((state) => state.dropCourse);
  return (
    <button
      onClick={() => dropCourse(id)}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
    >
      ถอน
    </button>
  );
}
