import React from "react";
import Title from "./components/Title";
import BugCard from "./components/BugCard";
import bugs from "./bugs.json";

class App extends React.Component {
  // Initial state
  state = {
    score: 0,
    highScore: 0,
    bugs,
    chosen: [],
    gameStarted: false
  };

  // Increments score by 1
  handleClick = (event) => {

    if (this.state.gameStarted === false) {
      this.setState({ gameStarted: true });
    }

    const id = event.target.getAttribute('data-id');
    console.log("id: " + id);

    if (this.state.chosen.includes(id)) {
      console.log("You Lose");

      this.setState({ score: 0, chosen: [] });

      setTimeout(
        function () {
          this.shuffle(this.state.bugs);
          this.setState({ gameStarted: false });
        }
          .bind(this), 2000);

    } else {

      console.log("not yet chosen");

      this.state.chosen.push(id);
      console.log(this.state.chosen);

      if (this.state.score >= this.state.highScore) {
        this.setState({ score: this.state.score + 1, highScore: this.state.highScore + 1 });
      } else {
        this.setState({ score: this.state.score + 1 });
      }

      if (this.state.score < bugs.length - 1) {
        this.shuffle(this.state.bugs);
      } else {
        console.log("You Win");
        setTimeout(
          function () {
            this.shuffle(this.state.bugs);
            this.setState({ gameStarted: false, score: 0, chosen: [] });
          }
            .bind(this), 2000);
      }

    };
  }

  shuffle = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }

  };

  render() {
    return (

      <div>
        <Title
          score={this.state.score}
          highScore={this.state.highScore}
          gameStarted={this.state.gameStarted}
          arrLength={this.state.bugs.length}
        />
        <div className="container">

          <div className="p-5"></div>
          <div className="text-white text-center">
            <h4>Don't click the same bug twice!</h4>
          </div>
          <div className="row pb-5">
            {this.state.bugs.map(bug => (
              <BugCard
                handleClick={this.handleClick}
                id={bug.id}
                key={bug.id}
                name={bug.name}
                image={bug.image}
                score={this.state.score}
                gameStarted={this.state.gameStarted}
                arrLength={this.state.bugs.length}
              />
            ))}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
