import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/ApiInstance";
import { storeUser } from "../utils/Storage";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  function login(event) {
    const userlogin = {
      email: email,
      password: password,
    };
    api
      .post("/users/loginuser", userlogin)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        storeUser(res.data.user, res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Error loggin in");
      });
    event.preventDefault();
  }
  return (
    <div>
      <h1 className="display-4 text-center p-3">Login!!🍕✌️</h1>
      <form
        className=""
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#FFFAF0",
          padding: "3rem",
        }}
      >
        <div class="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn btn-success mt-2" onClick={login}>
            Login
          </button>
          <p>
            Do not have an account??{" "}
            <Link to="/register" style={{ textDecoration: "underline" }}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
