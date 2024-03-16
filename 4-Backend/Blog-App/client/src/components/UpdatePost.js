import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdatePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/posts/${postId}`)
      .then((res) => setPost(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("User must loggedin to update the post");
    const jwt = JSON.parse(atob(token.split(".")[1]));
    // console.log(jwt);
    const id = jwt.id;
    axios
      .put(
        `http://localhost:5000/api/v1/posts/${postId}`,
        { ...post, author: id },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        alert(res.data.message);
        navigate("/", { replace: true });
      })
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="container mt-5">
      <h2 className="display-3 text-center">Update Post</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Image</Form.Label>
          <div className="form-control">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPost((prev) => {
                  return {
                    ...prev,
                    image: base64,
                  };
                })
              }
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tags (seperated by comma)"
            name="tags"
            value={post.tags}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Update Post
          </Button>{" "}
          <Button variant="secondary">Cancel</Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
};

export default UpdatePost;
