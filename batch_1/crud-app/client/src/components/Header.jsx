import React from "react";

function Header() {
  //  get todays date
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  // get current time
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  // format time
  return (
    <div
      className="d-flex justify-content-between text-white p-2"
      style={{ backgroundColor: "#452c63", fontSize: "1.5rem" }}
    >
      <div>My User Management</div>
      <div>
        {date}-{month}-{year}
      </div>
    </div>
  );
}

export default Header;
