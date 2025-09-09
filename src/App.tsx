import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import CourseDrop from "./component/CourseDrop";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">ระบบการถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
    </div>
  );
}

export default App;
