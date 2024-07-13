import { useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Homepage() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((mode) => !mode);
  }

  return (
    <>
      <NavBar isDark={isDark} handleClick={handleClick}>
        AtlasApp
      </NavBar>
      <Outlet />
    </>
  );
}

export default Homepage;
