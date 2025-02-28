import React from "react";
import { useState } from "react";

function InputFunc() {
  const [name, setName] = useState("My Name");
  return (
    <div>
      <h2>Handle Keyboard events</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          console.log(e);
          setName(e.target.value);
        }}
      />
      {/* component */}
      <p>
        I have entered my name as <b>{name}</b>
        {/* view */}
      </p>
      <p>
        I have entered so many characters <b>{name.length}</b>
      </p>
      {/* component to view data binding */}
    </div>
  );
}

export default InputFunc;
