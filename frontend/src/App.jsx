import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
// import PostDetails from "./pages/PostDetails";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        {/* <Route path="/post/:id" element={<PostDetails />} /> */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
