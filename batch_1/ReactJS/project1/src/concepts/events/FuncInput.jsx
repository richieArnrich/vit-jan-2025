import React, { useState } from "react";

function FuncInput() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Handle keyboard inputs</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          console.log(e);
          setName(e.target.value);
        }}
      />
      <h4>I have entered...{name}</h4>
      <h4>The length of the entered word is: {name.length}</h4>
      {/* component to view data binding */}
    </div>
  );
}

export default FuncInput;
