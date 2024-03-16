import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/v1/users/signin", user)
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
      })
      .catch((error) => console.log(error.response.data));
  };
  return (
    <div className="container mt-5">
      <h2 className="display-3 text-center">Sign In Page</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>{" "}
          <Button variant="secondary">Cancel</Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignIn;
