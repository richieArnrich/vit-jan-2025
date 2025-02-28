import React, { Component } from "react";

class ToggleState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Lionel",
      name2: "Ricky",
      toggle: true,
    };
  }
  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    console.log(this.state.toggle);
    return (
      <div>
        <h2>
          Hi my name is{" "}
          {this.state.toggle ? this.state.name1 : this.state.name2}
        </h2>
        <button onClick={this.toggleState}>Click Me</button>
      </div>
    );
  }
}

export default ToggleState;
