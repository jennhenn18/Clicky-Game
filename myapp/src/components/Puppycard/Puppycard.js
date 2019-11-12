import React from "react";
import "./Puppycard.css";

function Puppycard(props) {
    return (
        <div className="card-deck puppyrow">
            <div className="card-img-top puppycard" onClick={() => props.handleOnClick(props.id)}>
                <img className="puppyimage" src={props.image} alt={props.name} />
            </div>
        </div>
    );
}

export default Puppycard;