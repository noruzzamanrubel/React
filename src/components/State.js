import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      date: new Date(),
    };
  }

  Incremant = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    const { count } = this.state;
    const { date } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button
          className="count_btn"
          onClick={this.Incremant}
          disabled={count === 10 ? true : false}
        >
          +
        </button>
        <button
          className="count_btn"
          onClick={this.Decrement}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
