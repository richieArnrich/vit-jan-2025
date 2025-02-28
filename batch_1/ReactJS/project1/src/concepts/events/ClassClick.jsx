import React, { Component } from "react";

class ClassClick extends Component {
  handleClick = () => {
    let h3Ele = document.getElementById("h3");
    h3Ele.innerHTML =
      "Hello my name is Suraj and I am 35 years old and I am a sportsman";
  };
  render() {
    return (
      <div>
        <h3 id="h3">
          Hello my name is Manoj and I am 25 years old and I am a student
        </h3>
        <button onClick={this.handleClick}>Change Output</button>
      </div>
    );
  }
}

export default ClassClick;
