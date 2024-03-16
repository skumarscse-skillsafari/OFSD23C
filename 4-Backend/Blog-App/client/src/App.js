import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./components/NavComp";
import Posts from "./components/Posts";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import SinglePost from "./components/SinglePost";
import Profile from "./components/Profile";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <div>
      <Router>
        <NavComp />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update/:postId" element={<UpdatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
