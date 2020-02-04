import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    count: 0,
    latestId: 1,
    counters: []
  };

  addCounter = () => {
    this.setState(state => {
      const counters = state.counters.concat({
        id: state.latestId,
        value: 0
      });

      return {
        counters,
        latestId: state.latestId,
        count: 0
      };
    });

    this.setState({ latestId: this.state.latestId + 1 });
  };

  render() {
    console.log(this);
    return (
      <div>
        <button onClick={this.addCounter}>Add counter</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
