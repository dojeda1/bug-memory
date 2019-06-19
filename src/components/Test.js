import React from "react";

class Test extends React.Component {
  // Initial state
  state = {
    score: 0
  };

  // handleIncrement increments score by 1
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (

      <div>
        <p>Score: {this.state.score}</p>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +1
          </button>
      </div>

    );
  }
}

export default Test;
