import React from "react";
import { useState } from "react";

function FuncState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>I have clicked {count} times</h2>
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
        decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default FuncState;
