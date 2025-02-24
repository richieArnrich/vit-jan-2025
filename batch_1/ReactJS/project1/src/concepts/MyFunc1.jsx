import React from "react";
import "./styles/styles.css";
import fig1 from "./images/img1.avif";
import fig2 from "./images/img2.jpg";

function MyFunc1(props) {
  console.log(props);
  const mystyles = {
    color: "red",
    background: "lightgreen",
    fontSize: "30px",
  };
  return (
    <div>
      <h1>My First React Function Component</h1>
      <div className="styling">
        <p style={{ background: "yellow", color: "blue" }}>
          I am styled uisng inline style prop
        </p>
        <p style={mystyles}>I am styled using style object</p>
        <p id="i1">I am styled using external css</p>
      </div>
      <hr />
      <div className="images">
        <h2>Display images</h2>
        <h3>When images are in public folder</h3>
        <img src="./images/img1.avif" alt="chameleon" />
        <img src="./images/img2.jpg" alt="peacock" id="img2" />
        <h3>When images are out of public folder</h3>
        <img src={fig1} alt="chameleon" />
        <img src={fig2} alt="peacock" id="img2" />
      </div>
      <hr />
      <div className="display-props">
        <h2>Display props</h2>
        <p>Name is {props.name}</p>
        <p>Age is {props.age}</p>
        <p style={{ backgroundColor: props.bgColor, color: props.fontColor }}>
          BgColor passed is {props.bgColor} and font color is {props.fontColor}
        </p>
      </div>
    </div>
  );
}

export default MyFunc1;
