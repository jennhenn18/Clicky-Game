import React from "react";
import style from "./Puppycard.css";

function Puppycard(props) {
    return (
        <div className="card-deck">
            <div className="card-img-top">
                <img className="puppyimage" src={props.image} alt={props.name} />
            </div>
        </div>
    );
}

export default Puppycard;