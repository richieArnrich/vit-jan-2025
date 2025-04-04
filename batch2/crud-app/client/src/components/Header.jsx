import React from "react";

function Header() {
  // get todays date
  const today = new Date();
  const date = today.toLocaleDateString("en-US");
  console.log(date);
  return (
    <div
      style={{ backgroundColor: "#E6E6FA" }}
      className="d-flex justify-content-between p-3 align-items-center"
    >
      <div className="h5 text-uppercase fw-light fs-2">My User Mgmt</div>
      <div className="fw-light">{date}</div>
    </div>
  );
}

export default Header;
