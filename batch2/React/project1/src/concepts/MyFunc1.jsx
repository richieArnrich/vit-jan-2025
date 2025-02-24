import React from "react";
import "./styles/styles.css";
import fig1 from "./images/img1.avif";
import fig2 from "./images/img2.jpg";

function MyFunc1(props) {
  console.log(props);
  console.log(typeof props);
  const mystyles = {
    color: "white",
    fontSize: "30px",
    backgroundColor: "blue",
  };
  return (
    <div>
      <h1>My First React App</h1>
      <div>
        <h2 style={{ color: "blue", backgroundColor: "yellow" }}>
          I am styled using inline style prop
        </h2>
        <h3 style={mystyles}>I am styled using style object</h3>
        <h4 id="ext-style">I am styled using external css</h4>
      </div>
      <hr />
      <div className="images">
        <h3>Calling images in public folder</h3>
        <img src="./images/img1.avif" alt="chameleon" />
        <img src="./images/img2.jpg" alt="chameleon" id="img2" />
        <h3>Calling images as a component</h3>
        <img src={fig1} alt="chameleon" />
        <img src={fig2} alt="chameleon" id="img2" />
      </div>
      <hr />
      {/* displaying props */}
      <div>
        <h3>Displaying props</h3>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
      <hr />
    </div>
  );
}

export default MyFunc1;
