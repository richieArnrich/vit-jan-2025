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
  return (
    <div
      className="d-flex justify-content-between text-white p-2"
      style={{ backgroundColor: "#452c63", fontSize: "1.5rem" }}
    >
      <div>My User Management</div>
      <div>
        {date}-{month}-{year}
      </div>
      <div>
        {user ? (
          <div>
            <span>{user.name}</span>
            <Link className="btn btn-primary" to="/login">
              Logout
            </Link>
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
