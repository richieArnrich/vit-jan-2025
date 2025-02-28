import React, { Component } from "react";

class StateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rahul",
      age: 30,
    };
  }
  handleClick = () => {
    //function to update the state
    this.setState({
      name: "Anil",
      age: 20,
    });
  };
  render() {
    return (
      <div>
        <h3>
          Hi my name is {this.state.name} and age is {this.state.age}
        </h3>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default StateClass;
