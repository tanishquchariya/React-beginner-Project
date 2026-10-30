import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Employee Management System</h1>

      <p>Manage your employees efficiently.</p>

      <Link to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;