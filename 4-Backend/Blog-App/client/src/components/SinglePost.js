import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/posts/${id}`)
      .then((res) => setPost(res?.data?.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <h2 className="display-3 text-center mt-3">SinglePost</h2>
      <Card>
        <Card.Img variant="top" src={post?.image} />
        <Card.Body>
          <Card.Title>{post?.title}</Card.Title>
          <Card.Text>{post?.description}</Card.Text>
          <Card.Text>Tags: {post?.tags?.join(", ")}</Card.Text>
          <Card.Text>Author: {post?.author?.username}</Card.Text>
          <Card.Text>
            Published on: {new Date(post?.createdAt).toLocaleDateString()}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePost;
