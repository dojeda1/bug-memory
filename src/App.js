import React from "react";
import Card from "./components/Card";
import characters from "./characters.json";

class App extends React.Component {
  // Initial state
  state = {
    score: 0,
    highScore: 0,
    characters
  };

  // Increments score by 1
  handleIncrement = () => {
    if (this.state.score >= this.state.highScore) {
      this.setState({ score: this.state.score + 1, highScore: this.state.highScore + 1 });
    } else {
      this.setState({ score: this.state.score + 1 });
    }
  };

  handleReset = () => {
    this.setState({ score: 0 });
  }

  render() {
    return (

      <div>
        <div className="container">
          <p>Score: {this.state.score}</p>
          <p>High Score: {this.state.highScore}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            +1
          </button>
          <button className="btn btn-secondary" onClick={this.handleReset}>
            Reset
          </button>
          <div className="row">
            {this.state.characters.map(character => (
              <Card
                handleIncrement={this.handleIncrement}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
