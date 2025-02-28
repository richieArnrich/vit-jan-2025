import React, { Component } from "react";
import axios from "axios";

class ApiClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://openlibrary.org/subjects/mystery.json?limit=50")
      .then((res) => {
        console.log(res.data.works);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Displaying Users</h1>
      </div>
    );
  }
}

export default ApiClass;
