import React from "react";
import confetti from "../assets/confetti.gif";

const EndOfGame = ({ seconds }: { seconds: number }) => {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const finalTime = `${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;

    return (
        <div className="end-wrapper">
            <div className="end-banner">
                <h1>Congratulations!!!</h1>
                <p>You finished in {finalTime}</p>
                <img src={confetti} alt="Congratulations" />
                <br />
                <button onClick={() => window.location.reload()}>Reset</button>
            </div>
        </div>
    );
};

export default EndOfGame;
