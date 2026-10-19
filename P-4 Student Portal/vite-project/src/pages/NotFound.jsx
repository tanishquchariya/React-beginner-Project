
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="card">
      <h1>404 — Page Not Found</h1>

      <p>The URL you entered does not match a page.</p>

      <Link to="/">Go to Home</Link>
    </section>
  );
}

export default NotFound;
