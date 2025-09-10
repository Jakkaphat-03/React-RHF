import { useState } from "react";
import { useCourseStore } from "../store/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({ ...form, id: Date.now().toString(), credit: Number(form.credit) });
    setForm({ code: "", nameTH: "", nameEN: "", credit: 3, teacher: "", grade: "A" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg space-y-4">
      <h2 className="text-lg font-semibold text-blue-700">📚 เพิ่มรายวิชา</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="code" value={form.code} onChange={handleChange}
          placeholder="รหัสวิชา" className="border p-2 rounded w-full" />
        <input name="credit" type="number" value={form.credit} onChange={handleChange}
          placeholder="หน่วยกิต" className="border p-2 rounded w-full" />
      </div>

      <input name="nameTH" value={form.nameTH} onChange={handleChange}
        placeholder="ชื่อวิชา (ไทย)" className="border p-2 rounded w-full" />

      <input name="nameEN" value={form.nameEN} onChange={handleChange}
        placeholder="ชื่อวิชา (อังกฤษ)" className="border p-2 rounded w-full" />

      <input name="teacher" value={form.teacher} onChange={handleChange}
        placeholder="อาจารย์ผู้สอน" className="border p-2 rounded w-full" />

      <select name="grade" value={form.grade} onChange={handleChange}
        className="border p-2 rounded w-full">
        <option>A</option><option>B+</option><option>B</option>
        <option>C+</option><option>C</option><option>D+</option>
        <option>D</option><option>F</option>
      </select>

      <button type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
        เพิ่มรายวิชา
      </button>
    </form>
  );
}
