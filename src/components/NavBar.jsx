import { Link } from "react-router-dom";

export default function NavBar({ isDark = "false", handleClick, children }) {
  return (
    <nav className={`navbar ${isDark ? "navbar-dark" : ""}`}>
      <Link to="/">
        <h1>{children}</h1>
      </Link>
      <div role="button" className="navbar__mode" onClick={handleClick}>
        <img
          src={isDark ? "asset/moon.svg" : "asset/moon-dark.png"}
          alt="moon icon"
        />
        <h2>Dark Mode</h2>
      </div>
    </nav>
  );
}
