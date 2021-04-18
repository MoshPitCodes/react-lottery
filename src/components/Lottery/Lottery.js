import React, { Component } from "react";
import Ball from "../Ball/Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // generate random numbers
  generate() {
    //set state by building a new array first
    this.setState((curState) => ({
      nums: curState.nums.map((n) =>
        Math.floor(Math.random() * this.props.maxNum + 1)
      ),
    }));
  }

  // helper function for clean code
  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <div className="Lottery-container">
          <h1 className="Lottery-title">{this.props.title}</h1>
          <div>
            {this.state.nums.map((n) => (
              <Ball num={n} />
            ))}
          </div>
        </div>
        <div>
          <button onClick={this.handleClick}> Generate </button>
        </div>
      </section>
    );
  }
}
export default Lottery;
