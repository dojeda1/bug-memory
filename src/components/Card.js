import React from "react";

function Card(props) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <img data-id={props.id} className="img-fluid" src={props.image} alt={props.name} onClick={(e) => props.handleClick(e)}></img>
        </div>
    );
}

export default Card;

