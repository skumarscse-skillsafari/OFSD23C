import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const jwt = JSON.parse(atob(token.split(".")[1]));
  // console.log(jwt);
  const id = jwt.id;
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => setUser(res.data.user))
      .catch((error) => console.log(error));
  }, []);
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <div className="container">
      <div className="text-center">
        <div className="btn btn-primary mt-3" onClick={logout}>
          Logout
        </div>
      </div>
      <h2 className="display-3 text-center mt-3">Profile</h2>
      <h3>Username: {user.username}</h3>
      <p>Email: {user.email}</p>
      <button className="btn btn-warning">Edit</button>
    </div>
  );
};

export default Profile;
