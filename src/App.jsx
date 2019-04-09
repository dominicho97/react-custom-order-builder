import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Napoli" };
    // bind event
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // event
  handleChange(event) {
    this.setState({ value: event.target.value });
    //this.props.onChange(name);
  }
  //submit
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
        <label>
          <h1>hmm</h1>

          <div>
            <h2>Pizza type</h2>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Margherita">Margherita</option>
              <option value="Napoli">Napoli</option>
              <option value="Calzone">Calzone</option>
            </select>
          </div>
        </label>
        <input type="submit" value="Confirm" />
      </form>
    );
  }
}

export default App;
