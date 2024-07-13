import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

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
      <Header isDark={isDark} />
    </>
  );
}

export default Homepage;
