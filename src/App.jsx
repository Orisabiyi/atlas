import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((mode) => !mode);
  }

  return (
    <>
      <NavBar isDark={isDark} handleClick={handleClick} />
      <Header isDark={isDark} />
    </>
  );
}
