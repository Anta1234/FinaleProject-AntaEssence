import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Card">
        <Title />
      </div>
    );
  }
}

export default App;
