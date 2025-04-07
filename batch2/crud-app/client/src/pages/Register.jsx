import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/ApiInstance";

function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [contact, setContact] = useState(null);

  function regUser(event) {
    const user = {
      name: name,
      email: email,
      password: password,
      contact: contact,
    };
    api
      .post("/users/regUser", user)
      .then((res) => {
        console.log(res.data);
        alert("User registered successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error registering user");
      });
    event.preventDefault();
  }
  return (
    <div>
      <h1 className="text-center display-4 p-2">Register Yourself!!!😈🍕😉</h1>
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
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group p-2">
          <label for="contact">Contact</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            placeholder="Enter contact"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
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
          <button className="btn btn-primary" onClick={regUser}>
            Register
          </button>
          <p className="mt-2">
            Already a user?? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
