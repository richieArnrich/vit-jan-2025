import React, { Component } from "react";

class ToggleState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Anil",
      name2: "Rajath",
      toggle: true,
    };
  }
  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return (
      <div>
        <h3>
          Hello my name{" "}
          {this.state.toggle ? this.state.name1 : this.state.name2}
        </h3>
        <button onClick={this.toggleState}>Toggle State</button>
      </div>
    );
  }
}

export default ToggleState;

// rfce, rce, rconst
