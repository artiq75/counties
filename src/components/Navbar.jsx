import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">
          Where in the world?
        </Link>
      </h1>
      <theme-mode></theme-mode>
    </div>
  )
}
