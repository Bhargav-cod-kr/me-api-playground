import { Link } from "react-router-dom";
import HealthBadge from "../pages/HealthBadge.jsx";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-center gap-8 text-lg font-semibold">
      <Link className="hover:text-blue-600" to="/">Profile</Link>
      <Link className="hover:text-blue-600" to="/projects">Projects</Link>
      <Link className="hover:text-blue-600" to="/search">Search</Link>
      <HealthBadge />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    marginBottom: "15px"
  }
};

