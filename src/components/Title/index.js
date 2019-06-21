import React from "react";
import "./style.css";

function Title(props) {

    let status;

    if (props.score === 0 && props.gameStarted === false) {
        status = <span>Click any bug to begin</span>
    } else if (props.score === 0 && props.gameStarted === true) {
        status = <span>You Lost!</span>
    } else if (props.score === 12) {
        status = <span>You Won!</span>
    } else {
        status = <span>Correct</span>
    }


    return (

        <div className="row mb-3 p-3 title fixed-top shadow">
            <div className="container">
                <div className="col text-center">
                    <span className="font-weight-bold float-left">Bug Memory</span>
                    {status}
                    <span className="score-display float-right">Score: {props.score} | High Score: {props.highScore}</span>
                </div>

            </div>
        </div>
    );
}

export default Title;