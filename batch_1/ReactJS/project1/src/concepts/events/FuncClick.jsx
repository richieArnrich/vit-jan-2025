import React from "react";

function FuncClick() {
  const handleClick = () => {
    let h1 = document.getElementById("h1");
    h1.innerHTML =
      "Hello my name is Rajath and I am 30 years old and I am a professor";
  };
  return (
    <div>
      <h1 id="h1">
        Hello my name is Rohan and I am 10 years old and I am a student
      </h1>
      <button onClick={handleClick}>Change Output</button>
    </div>
  );
}

export default FuncClick;
