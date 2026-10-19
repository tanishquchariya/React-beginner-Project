import { useParams, Link } from "react-router-dom";

function StudentDetails() {
  const { studentId } = useParams();

  const students = {
    101: { name: "Aman", course: "Computer Science" },
    102: { name: "Priya", course: "Information Technology" },
    103: { name: "Rahul", course: "Electronics" },
  };

  const student = students[studentId];

  if (!student) {
    return (
      <section className="card"> 
        <h1>Student Not Found</h1>
        <p>No student exists with ID {studentId}.</p>
        <Link to="/students">Back to Students</Link>
      </section>
    );
  }

  return (
    <section className="card">
      <h1>Student Details</h1>

      <p><strong>ID:</strong> {studentId}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>

      <Link to="/students">Back to Students</Link>
    </section>
  );
}

export default StudentDetails;
