import { useState } from "react";

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((mode) => !mode);
  }

  return (
    <nav className="navbar">
      <h1>AtlasApp</h1>
      <div role="button" className="navbar__mode" onClick={handleClick}>
        <img src="asset/moon.svg" alt="moon icon" />
        <h2>Dark Mode</h2>
      </div>
    </nav>
  );
}
