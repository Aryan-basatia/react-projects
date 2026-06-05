export default function StudentCard({ student, onToggle }) {
  return (
    <article className="student-card">
      <div className="student-card__top">
        <h2>{student.name}</h2>
        <span
          className={`status-badge ${student.isEnrolled ? "enrolled" : "inactive"}`}
        >
          {student.isEnrolled ? "Enrolled" : "Not enrolled"}
        </span>
      </div>

      <p className="student-meta">Course: {student.course}</p>
      <p className="student-meta">Grade: {student.grade}</p>

      <button
        className="toggle-btn"
        onClick={() => onToggle && onToggle(student.id)}
      >
        {student.isEnrolled ? "Unenroll" : "Enroll"}
      </button>
    </article>
  );
}
