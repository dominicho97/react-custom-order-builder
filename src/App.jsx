import React, { Component } from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Small pasta",
      sauce: "Tomato sauce",
      topping: "Fish"
    };

    //Prices
    const pasta_prices = new Array();
    {
      pasta_prices["Small pasta"] = 5;
      pasta_prices["Medium pasta "] = 6.5;
      pasta_prices["Large pasta"] = 8;
      pasta_prices["Extra large pasta"] = 10;
    }

    //GetPrice
    function getPastaPrice() {
      let getPastaPrice = 0;
      let theForm = document.forms["cakeform"];
      let selectedPasta = theForm.elements["filling"];
      getPastaPrice = pasta_prices[selectedPasta.value];
      return getPastaPrice;
    }

    //total price
    let totalPrice = getPastaPrice;
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
              <form onSubmit={this.handleSubmit} id="cakeform">
                <label>
                  Choose your pasta size:
                  <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    id="filling"
                  >
                    <option value="Small pasta">Small(5)</option>
                    <option value="Medium pasta">Medium(6.5)</option>
                    <option value="Large pasta">Large(8)</option>
                    <option value="Extra large pasta">Extra large(10)</option>
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
