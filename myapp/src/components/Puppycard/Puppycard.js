import React from "react";
import style from "./Puppycard.css";

function Puppycard(props) {
    return (
        <div className="card">
            <img className="puppyimage" src={props.image} alt={props.name} />
        </div>
    );
}

export default Puppycard;