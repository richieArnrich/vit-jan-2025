import React, { useState } from "react";

function FuncState() {
  console.log(useState);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>State in Functional Component</h1>
      <p>I have clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default FuncState;
