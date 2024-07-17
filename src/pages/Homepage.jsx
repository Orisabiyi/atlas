import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Homepage({ isDark, handleClick }) {
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
