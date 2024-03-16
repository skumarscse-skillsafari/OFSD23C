import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const token = localStorage.getItem("token");
  const deletePost = (e) => {
    e.preventDefault();
    const { id } = e.target;
    axios
      .delete(`http://localhost:5000/api/v1/posts/${id}`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => alert(res.data.message))
      .catch((error) => console.log(error));
  };
  return (
    <div className="col mb-3">
      <Card style={{ width: "18rem", height: "400px" }}>
        <Card.Img variant="top" src={post?.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{post?.title}</Card.Title>
          <Card.Text>{post?.description}</Card.Text>
          <Card.Text>{post?.tags?.join(", ")}</Card.Text>
          <Card.Text>{post?.author?.username}</Card.Text>
          <Link className="btn btn-primary" to={`/update/${post._id}`}>
            Update
          </Link>{" "}
          <Button variant="danger" onClick={deletePost} id={post._id}>
            Delete
          </Button>{" "}
          <Link className="btn btn-success" to={`/post/${post._id}`}>
            View
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
