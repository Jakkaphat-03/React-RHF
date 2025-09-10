import { useCourseStore } from "../store/courseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((state) => state.dropped);

  return (
    <div className="bg-white shadow p-6 rounded-lg mt-6">
      <h2 className="text-lg font-semibold text-red-700 mb-3">❌ รายวิชาที่ถอนแล้ว</h2>
      {dropped.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีรายวิชาที่ถอน</p>
      ) : (
        <ul className="space-y-2">
          {dropped.map((c) => (
            <li key={c.id} className="border rounded p-3 bg-gray-50">
              <p className="font-semibold">{c.code} - {c.nameTH}</p>
              <p className="text-sm text-gray-600">
                {c.nameEN} | {c.credit} หน่วยกิต | อ. {c.teacher} | เกรด: W
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
