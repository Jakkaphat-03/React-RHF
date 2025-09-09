import { useCourseStore } from "../store/courseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((state) => state.dropped);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">รายวิชาที่ถอนแล้ว</h2>
      <ul className="space-y-2">
        {dropped.map((c) => (
          <li key={c.id} className="border p-2 bg-gray-100">
            {c.code} - {c.nameTH} ({c.credit} หน่วยกิต) | เกรด: W
          </li>
        ))}
      </ul>
    </div>
  );
}
