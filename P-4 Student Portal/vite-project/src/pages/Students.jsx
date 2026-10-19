
import { Link } from "react-router-dom";

function Students() {
  const studentsList = [
    { id: 101, name: "Aman" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Rahul" },
  ];

  return (
    <section className="card">
      <h1>Students</h1>
      <p>Click a student to view their details.</p>

      <ul className="student-list">
        {studentsList.map((singleObject) => (
          <li key={singleObject.id}>
            <Link to={`/students/${singleObject.id}`}>
              {singleObject.name} — View Details
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Students;
