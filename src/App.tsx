import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import CourseDrop from "./component/CourseDrop";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          🎓 ระบบการถอนรายวิชา
        </h1>
        <CourseForm />
        <CourseList />
        <CourseDrop />
      </div>
    </div>
  );
}

export default App;
