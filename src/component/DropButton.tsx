import { useCourseStore } from "../store/courseStore";

export default function DropButton({ id }: { id: string }) {
  const dropCourse = useCourseStore((state) => state.dropCourse);
  return (
    <button onClick={() => dropCourse(id)} className="bg-red-500 text-white px-2 py-1 rounded">
      ถอน
    </button>
  );
}
