
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Student Portal
      </Link>

      <div className="nav-links">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/students">
          Students
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
