import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Header />} />
          <Route path=":id" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
