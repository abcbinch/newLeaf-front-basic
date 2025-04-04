import { Routes, Route, Link } from "react-router-dom";
import Codingon from "./components/Codingon";
import SearchParams from "./components/SearchParams";
import StudentDefault from "./components/StudentDefault";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route
          path="/student/codingon"
          element={<Codingon name="codingon" />}
        />
        <Route path="/student/sean" element={<StudentDefault name="sean" />} />

        <Route
          path="/student"
          element={<SearchParams fakename="new" name2="jisu" />}
        />
      </Routes>
    </div>
  );
}

export default App;
