import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });

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
    const jwt = JSON.parse(atob(token.split(".")[1]));
    // console.log(jwt);
    const id = jwt.id;
    axios
      .post(`http://localhost:5000/api/v1/posts?id=${id}`, post, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => alert(res.data.message))
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="container mt-5">
      <h2 className="display-3 text-center">Create Post</h2>
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
            Create Post
          </Button>{" "}
          <Button variant="secondary">Cancel</Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreatePost;
