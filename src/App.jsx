import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import { CountryContext } from "./contexts/CountryContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((mode) => !mode);
  }

  return (
    <CountryContext>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage isDark={isDark} handleClick={handleClick} />}
          >
            <Route index element={<Header isDark={isDark} />} />
            <Route path="/:country" element={<CountryDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountryContext>
  );
}

export default App;
