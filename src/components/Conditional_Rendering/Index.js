import React, { Component } from "react";
import SignIn from "./SignIn";
import HomePage from "./HomePage";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoginIn: false,
    };
  }

  render() {
    const { IsLoginIn } = this.state;

    let content;
    content = IsLoginIn ? <HomePage /> : <SignIn />;

    return <div>{content}</div>;
  }
}
