import React from "react";

function Scorecard(props) {
    console.log(props)
    return (
        <div>
            <p>Click on a puppy to earn points, but if you click on the same puppy more than once you restart the game.</p>
            <div>
            <h5>Your Score: {props.score} </h5>
        
            <h5>Top Score: {props.topscore}</h5>
            </div>


            <p>{props.alert}</p>
        </div>
    );
}

export default Scorecard;