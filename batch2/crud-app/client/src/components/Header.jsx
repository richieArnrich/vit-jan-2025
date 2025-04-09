import React from "react";
import { Link } from "react-router-dom";
import { getToken, getUser } from "../utils/Storage";

function Header() {
  // get todays date
  const today = new Date();
  const date = today.toLocaleDateString("en-US");
  console.log(date);
  const token = getToken();
  const user = getUser();

  //function to remove user and token
  function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("User logged out");
    window.location.reload();
  }

  return (
    <div
      style={{ backgroundColor: "#E6E6FA" }}
      className="d-flex justify-content-between p-3 align-items-center"
    >
      <div className="h5 text-uppercase fw-light">Recipe Finder</div>
      <div className="fw-light">{date}</div>
      {user && <div className="fw-light">Logged in as: {user.name}</div>}
      {token ? (
        <Link className="btn btn-danger" onClick={logOut}>
          Logout
        </Link>
      ) : (
        <div>
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
