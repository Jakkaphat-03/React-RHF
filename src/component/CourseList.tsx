import { useCourseStore } from "../store/courseStore";
import DropButton from "./DropButton";

export default function CourseList() {
  const courses = useCourseStore((state) => state.courses);
  const gpa = useCourseStore((state) => state.calculateGPA)();

  return (
    <div className="bg-white shadow p-6 rounded-lg mt-6">
      <h2 className="text-lg font-semibold text-green-700 mb-3">📖 รายวิชาที่ลงทะเบียน</h2>
      {courses.length === 0 ? (
        <p className="text-gray-500">ยังไม่มีรายวิชาที่เพิ่ม</p>
      ) : (
        <ul className="space-y-2">
          {courses.map((c) => (
            <li key={c.id}
              className="border rounded p-3 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-semibold">{c.code} - {c.nameTH}</p>
                <p className="text-sm text-gray-600">
                  {c.nameEN} | {c.credit} หน่วยกิต | อ. {c.teacher} | เกรด: {c.grade}
                </p>
              </div>
              <DropButton id={c.id} />
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right font-bold text-blue-700">
        GPA: {gpa !== null ? gpa.toFixed(2) : "-"}
      </div>
    </div>
  );
}
