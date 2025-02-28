import React from "react";

function FuncClick() {
  const handleClick = () => {
    let h1Ele = document.getElementById("h1");
    h1Ele.innerHTML = "Hello my name is Sushan and I am an musician";
  };

  return (
    <div>
      <h1 id="h1">Hello my name is Rohan and I am an architect</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default FuncClick;
