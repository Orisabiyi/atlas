export default function NavBar({ isDark = "false", handleClick }) {
  return (
    <nav className={`navbar ${isDark ? "navbar-dark" : ""}`}>
      <h1>AtlasApp</h1>
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
