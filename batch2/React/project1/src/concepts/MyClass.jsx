import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props); //invoke super class constructor
    this.state = {
      //object
      name: "Karthik Lokesh",
      age: 25,
      job: "DJ",
    };
  }
  changeState = () => {
    setTimeout(() => {
      this.setState({
        name: "Gaurav AK",
        age: 23,
        job: "Cricket",
      });
    }, 3000);
  };
  render() {
    return (
      <div>
        <h1>My Class Component</h1>
        <div>
          <h3>Displaying props</h3>
          <p>My name is {this.props.name}</p>
          <p>My age is {this.props.age}</p>
        </div>
        <hr />
        <div>
          <h3>Displaying state</h3>
          <p>My name is {this.state.name}</p>
          <p>My age is {this.state.age}</p>
          <p>My job is {this.state.job}</p>
        </div>
        {this.changeState()}
      </div>
    );
  }
}

export default MyClass;
