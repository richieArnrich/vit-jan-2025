import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Welcome</h1>
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
          <input type="email" id="email" name="email" class="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
          />
          <button className="btn btn-success mt-2">Login</button>
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
