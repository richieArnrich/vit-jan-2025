import React, { Component } from "react";

class StateUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rajath",
      age: 25,
      city: "Mumbai",
    };
  }
  handleClick = () => {
    this.setState({
      //new object values
      name: "Anil Kumar",
      age: 30,
      city: "Bangalore",
    });
  };
  render() {
    return (
      <div>
        <h3>
          Hi my name is {this.state.name} and I am {this.state.age} years of age
          and I come from {this.state.city}
        </h3>
        <button onClick={this.handleClick}>Change State</button>
      </div>
    );
  }
}

export default StateUpdate;
