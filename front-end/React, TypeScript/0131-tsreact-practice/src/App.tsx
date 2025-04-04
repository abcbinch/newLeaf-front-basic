import Home from "components/Home";
import JsonList from "components/JsonList";
import PostList from "components/PostList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codingon" element={<PostList />} />
        <Route path="/codingon2" element={<JsonList />} />
      </Routes>
    </div>
  );
}

export default App;
