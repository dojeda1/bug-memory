import React from "react";
import Title from "./components/Title";
import BugCard from "./components/BugCard";
import characters from "./characters.json";

class App extends React.Component {
  // Initial state
  state = {
    score: 0,
    highScore: 0,
    characters,
    chosen: []
  };

  // Increments score by 1
  handleClick = (event) => {

    const id = event.target.getAttribute('data-id');
    console.log("id: " + id);

    if (this.state.chosen.includes(id)) {
      console.log("You Lose");

      this.setState({ score: 0, chosen: [] });

    } else {
      console.log("not yet chosen");

      this.state.chosen.push(id);
      console.log(this.state.chosen);

      if (this.state.score >= this.state.highScore) {
        this.setState({ score: this.state.score + 1, highScore: this.state.highScore + 1 });
      } else {
        this.setState({ score: this.state.score + 1 });
      }

    }

    this.shuffle(this.state.characters);
  };

  shuffle = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }

  }

  render() {
    return (

      <div>
        <Title score={this.state.score} highScore={this.state.highScore} />
        <div className="container">

          <div className="p-5"></div>
          <div className="row pb-5">
            {this.state.characters.map(character => (
              <BugCard
                handleClick={this.handleClick}
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
