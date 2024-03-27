import React from "react";
import confetti from "../assets/confetti.gif";

const EndOfGame = () => {
    return (
        <div className="end-wrapper">
            <div className="end-banner">
                <h1>Congratulations!!!</h1>
                <p>You finished in 30 seconds</p>
                <img src={confetti} alt="" />
            </div>
        </div>
    );
};

export default EndOfGame;
