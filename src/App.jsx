import React, { Component } from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      sauce: "",
      topping: ""
    };

    //Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSauce = this.handleChangeSauce.bind(this);
    this.handleChangeTopping = this.handleChangeTopping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //event
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangeSauce(event) {
    this.setState({ sauce: event.target.value });
  }

  handleChangeTopping(event) {
    this.setState({ topping: event.target.value });
  }
  //output
  handleSubmit(event) {
    alert(
      "Your order is: " +
        this.state.value +
        " with " +
        this.state.sauce +
        " and " +
        this.state.topping
    );
    event.preventDefault();
  }

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
                  <select
                    //value={this.state.sauce}
                    onChange={this.handleChangeSauce}
                  >
                    <option value="Tomato sauce">Tomato sauce</option>
                    <option value="Mushroom sauce">Mushroom sauce</option>
                    <option value="Pesto sauce">Pesto sauce</option>
                    <option value="No sauce">None</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="pasta-topping">
          <form>
            <label>
              Choose your pasta topping:
              <select onChange={this.handleChangeTopping}>
                <option value="Fish ">Fish</option>
                <option value="Meat">Meat</option>
                <option value="Vegetables">Vegetables</option>
                <option value="No topping">None</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
