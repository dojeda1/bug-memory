import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-3">
            <img className="shadow" data-id={props.id} src={props.image} alt={props.name} onClick={(e) => props.handleClick(e)}></img>
        </div>
    );
}

export default Card;

