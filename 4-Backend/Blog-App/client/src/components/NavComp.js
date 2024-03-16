import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavComp = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar bg="secondary" data-bs-theme="secondary">
        <Container>
          <Link to="/" className="btn btn-secondary">
            BLOG APP
          </Link>
          <Nav>
            <Link to="/" className="btn btn-secondary me-5">
              Posts
            </Link>

            <div
              className="btn btn-secondary me-5"
              onClick={() => {
                localStorage.getItem("token")
                  ? navigate("/create", { replace: true })
                  : alert("User must loggedin to create post");
              }}
            >
              Create Post
            </div>

            {token ? (
              <Link to="/profile" className="btn btn-secondary">
                Profile
              </Link>
            ) : (
              <>
                <Link to="/signin" className="btn btn-secondary me-5">
                  Sign In
                </Link>

                <Link to="/signup" className="btn btn-secondary">
                  Sign Up
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComp;
