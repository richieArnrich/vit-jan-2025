import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/ApiInstance";
import { storeUser } from "../utils/Storage";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  function loginUser(event) {
    if (email && password) {
      // Call API to login user
      const userLogin = {
        email: email,
        password: password,
      };
      api
        .post("/users/login", userLogin)
        .then((res) => {
          console.log(res.data);
          alert("User logged in successfully");
          storeUser(res.data.user, res.data.token);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert("Error logging in");
        });
      event.preventDefault();
    }
  }
  return (
    <div>
      <h1 className="text-center display-4 p-2">Welcome!!!😈🍕😉</h1>
      <form
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FFFAF0",
          padding: "3rem",
        }}
      >
        <div className="form-group p-2">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group p-2">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-group p-2">
          <button className="btn btn-success" onClick={loginUser}>
            Login
          </button>
          <p>
            New User?? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
