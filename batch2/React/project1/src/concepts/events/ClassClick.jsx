import React, { Component } from "react";

class ClassClick extends Component {
  handleClick = () => {
    let h2Ele = document.getElementById("h2");
    h2Ele.innerHTML = "Hello my name is Gaurav and I am a cricketer";
  };
  render() {
    return (
      <div>
        <h2 id="h2">
          Hello my name is Dhaya and I am a social media influencer
        </h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
