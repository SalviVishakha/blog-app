import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import PostForm from "./components/PostForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<PostForm />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
