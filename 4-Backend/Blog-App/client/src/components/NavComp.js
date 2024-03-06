import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">BLOG APP</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="btn btn-secondary me-5">
              Posts
            </Link>

            <Link to="/signin" className="btn btn-secondary me-5">
              Sign In
            </Link>

            <Link to="/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComp;
