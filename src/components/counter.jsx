import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h4>This is counter #{this.props.id}</h4>
        <div>
          <span>{this.formatCount()}</span>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
