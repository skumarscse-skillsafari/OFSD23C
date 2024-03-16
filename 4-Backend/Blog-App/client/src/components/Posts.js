import { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/posts")
      .then((res) => setPosts(res?.data?.data))
      .catch((error) => console.log(error));
  }, [posts]);
  return (
    <div className="container">
      <h2 className="display-3 text-center">Posts</h2>
      <div className="row">
        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
