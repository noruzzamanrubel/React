import React, { Component } from "react";

export default class Onchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ChangeValue: "",
    };
  }
  handleOnChange = (e) => {
    this.setState({
      ChangeValue: e.target.value,
    });
  };
  render() {
    const { ChangeValue } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{ChangeValue}</p>
      </div>
    );
  }
}
