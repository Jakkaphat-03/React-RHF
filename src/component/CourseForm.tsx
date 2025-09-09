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
    <form onSubmit={handleSubmit} className="space-y-2 border p-4 rounded">
      <input name="code" value={form.code} onChange={handleChange} placeholder="รหัสวิชา" className="border p-1 w-full"/>
      <input name="nameTH" value={form.nameTH} onChange={handleChange} placeholder="ชื่อวิชา (ไทย)" className="border p-1 w-full"/>
      <input name="nameEN" value={form.nameEN} onChange={handleChange} placeholder="ชื่อวิชา (อังกฤษ)" className="border p-1 w-full"/>
      <input name="credit" type="number" value={form.credit} onChange={handleChange} placeholder="หน่วยกิต" className="border p-1 w-full"/>
      <input name="teacher" value={form.teacher} onChange={handleChange} placeholder="อาจารย์ผู้สอน" className="border p-1 w-full"/>
      <select name="grade" value={form.grade} onChange={handleChange} className="border p-1 w-full">
        <option>A</option><option>B+</option><option>B</option>
        <option>C+</option><option>C</option><option>D+</option>
        <option>D</option><option>F</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">เพิ่มรายวิชา</button>
    </form>
  );
}
