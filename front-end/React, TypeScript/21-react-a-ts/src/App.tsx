import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import HeaderMenu from "./components/HeaderMenu";
import Matzip from "./pages/Matzip";

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/Matzip" element={<Matzip />} />
      </Routes>
    </div>
  );
}

export default App;
