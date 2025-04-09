import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../utils/Storage";

function Header() {
  //  get todays date
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const user = getUser();

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("user logged out");
    window.location.reload();
  }
  return (
    <div
      className="d-flex justify-content-between align-items-center text-white p-2"
      style={{ backgroundColor: "#452c63", fontSize: "1.35rem" }}
    >
      <div>My Recipe Finder</div>
      <div>
        {date}-{month}-{year}
      </div>
      <div>
        {user ? (
          <div>
            <span className="p-2">{user.name}</span>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
