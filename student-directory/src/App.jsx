import { useState } from "react";
import StudentCard from "./component/StudentCard";

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    course: "Mathematics",
    grade: "A",
    isEnrolled: true,
  },
  {
    id: 2,
    name: "Priya Mehta",
    course: "Computer Science",
    grade: "B",
    isEnrolled: true,
  },
  {
    id: 3,
    name: "Rohan Verma",
    course: "Physics",
    grade: "C",
    isEnrolled: false,
  },
  {
    id: 4,
    name: "Sneha Iyer",
    course: "Computer Science",
    grade: "A",
    isEnrolled: true,
  },
  {
    id: 5,
    name: "Karan Patel",
    course: "Mathematics",
    grade: "F",
    isEnrolled: false,
  },
  {
    id: 6,
    name: "Divya Nair",
    course: "Physics",
    grade: "B",
    isEnrolled: true,
  },
  {
    id: 7,
    name: "Arjun Das",
    course: "Chemistry",
    grade: "A",
    isEnrolled: true,
  },
  {
    id: 8,
    name: "Meera Pillai",
    course: "Mathematics",
    grade: "C",
    isEnrolled: false,
  },
  {
    id: 9,
    name: "Vikram Singh",
    course: "Chemistry",
    grade: "B",
    isEnrolled: true,
  },
  {
    id: 10,
    name: "Ananya Krishnan",
    course: "Computer Science",
    grade: "F",
    isEnrolled: false,
  },
];

function App() {
  const [student, setStudent] = useState(students);
  const [filter, setFilter] = useState("Show All");
  const [query, setQuery] = useState("");

  function toggleEnrollment(id) {
    setStudent((prev) =>
      prev.map((st) =>
        st.id === id ? { ...st, isEnrolled: !st.isEnrolled } : st,
      ),
    );
  }

  const visible = student.filter((s) => {
    const matchesFilter =
      filter === "Enrolled"
        ? s.isEnrolled
        : filter === "Dropped"
          ? !s.isEnrolled
          : true;
    const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const tags = ["Show All", "Enrolled", "Dropped"];

  const Enrolled = student.filter((t) => t.isEnrolled).length;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: 8 }}
      />

      {tags.map((f) => (
        <button key={f} onClick={() => setFilter(f)}>
          {f}
        </button>
      ))}

      <p>
        {Enrolled} student enrolled out of {student.length} total{" "}
      </p>

      {visible.map((s) => (
        <StudentCard key={s.id} student={s} onToggle={toggleEnrollment} />
      ))}
    </div>
  );
}

export default App;
