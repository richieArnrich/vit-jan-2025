import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/ApiInstance";

function Register() {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function register(event) {
    if (name && contact && email && password) {
      const user = {
        name: name,
        contact: contact,
        email: email,
        password: password,
      };
      api
        .post("/users/registeruser", user)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter all details");
    }
    event.preventDefault();
  }
  return (
    <div>
      <h1 className="display-4 text-center p-3">Register yourself!!🍕✌️</h1>
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label htmlFor="email">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            class="form-control"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
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
          <button className="btn btn-primary mt-2" onClick={register}>
            Register
          </button>
          <p>
            Already have an account?? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
