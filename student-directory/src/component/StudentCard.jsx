export default function StudentCard({ student, onToggle }) {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>
      <p>Grade: {student.grade}</p>
      <p>Status: {student.isEnrolled ? "Enrolled" : "Not enrolled"}</p>
      <button onClick={() => onToggle && onToggle(student.id)}>
        {student.isEnrolled ? "Unenroll" : "Enroll"}
      </button>
    </div>
  );
}
