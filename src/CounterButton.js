import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  counter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button variant="contained" color="primary" onClick={this.counter}>
          Counter
        </Button>
      </div>
    );
  }
}
