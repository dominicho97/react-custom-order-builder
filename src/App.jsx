import React, { Component } from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Small pasta", sauce: "Mushroom sauce" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSauce = this.handleChangeSauce.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangeSauce(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your order is: " + this.state.value + " with " + this.state.sauce);
    event.preventDefault();
  }
  /* handleSubmitSauce(event) {
    alert("Your order is: " + this.state.sauce);
    event.preventDefault();
  }*/

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="pasta-size">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Choose your pasta size:
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Small pasta">Small</option>
                    <option value="Medium pasta">Medium</option>
                    <option value="Large pasta">Large</option>
                    <option value="Extra large pasta">Extra large</option>
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="pasta-sauce">
              <form>
                <label>
                  Choose your pasta sauce:
                  <select>
                    <option value="Tomato sauce">Tomato sauce</option>
                    <option value="Mushroom sauce">Mushroom sauce</option>
                    <option value="Pesto sauce">Pesto sauce</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="pasta-topping">
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose your pasta topping:
              <select
                value={this.state.value}
                //onChange={this.handleChangeSauce}
              >
                <option value="Fish ">Fish</option>
                <option value="Meat">Meat</option>
                <option value="Vegetables">vegetables</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
