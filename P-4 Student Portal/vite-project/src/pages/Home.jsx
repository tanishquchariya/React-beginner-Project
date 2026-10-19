
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function openStudents() {
    navigate("/Students");
  }

  return (
    <section className="card">
      <h1>Welcome to Student Portal </h1>

      <p>
        This is a small React Router project.
      </p>

      <button onClick={openStudents}>
        View Students
      </button>
    </section>
  );
}

export default Home;
