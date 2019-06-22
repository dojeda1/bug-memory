import React from "react";
import "./style.css";

function Card(props) {

    let style;
    let styleFlash;

    if (props.score === 0 && props.gameStarted === true) {
        style = "col-sm-6 col-md-4 col-lg-3 p-3"
        styleFlash = "shadow fail shake"

    } else if (props.score === props.arrLength && props.gameStarted === true) {
        style = "col-sm-6 col-md-4 col-lg-3 p-3"
        styleFlash = "shadow win shake"
    } else {
        style = "col-sm-6 col-md-4 col-lg-3 p-3"
        styleFlash = "shadow"
    }

    return (
        <div className={style}>
            <img className={styleFlash} data-id={props.id} src={props.image} alt={props.name} onClick={(e) => props.handleClick(e)}></img>
        </div>
    );
}

export default Card;

