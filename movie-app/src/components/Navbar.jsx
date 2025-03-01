import { Link } from "react-router-dom";
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar;
