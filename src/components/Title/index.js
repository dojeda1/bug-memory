import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="row mb-3 p-3 title fixed-top">
            <div className="col">
                <span>Bug Memory</span>
                <span className="score-display float-right">Score: {props.score} | High Score: {props.highScore}</span>
            </div>

        </div>
    );
}

export default Title;