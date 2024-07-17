import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((mode) => !mode);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage isDark={isDark} handleClick={handleClick} />}
        >
          <Route index element={<Header isDark={isDark} />} />
          <Route path="/:country" element={<p>Hello World</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
