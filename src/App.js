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

    this.shuffle(this.state.characters)
  };

  handleReset = () => {
    this.setState({ score: 0 });
  }

  shuffle = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }

    this.setState({ character: array });
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
          {/* <button className="btn btn-warning" onClick={this.shuffle(this.state.characters)}>
            Shuffle
          </button> */}
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
