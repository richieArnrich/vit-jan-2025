import React from "react";

class MyClass1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karthik Lokesh",
      age: 20,
      job: "DJ",
    };
  }

  changeState = () => {
    setTimeout(() => {
      this.setState({
        name: "Adithya",
        age: 21,
        job: "Cricketer",
      });
    }, 3000);
  };
  render() {
    console.log("render called");
    return (
      <div>
        <h1>My First Class Component</h1>
        <div className="displayProps">
          <h2>Displaying Props in class component</h2>
          <p>Name: {this.props.name}</p>
          <p>Age: {this.props.age}</p>
        </div>
        <div className="stateMgmt">
          <h2>State Management in class component</h2>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
          <p>Job: {this.state.job}</p>
          {this.changeState()}
        </div>
      </div>
    );
  }
}

export default MyClass1;
