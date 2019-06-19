import React from "react";

function Card(props) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <img className="img-fluid" src={props.image} alt={props.name} onClick={() => props.handleIncrement()}></img>
        </div>
    );
}

export default Card;

