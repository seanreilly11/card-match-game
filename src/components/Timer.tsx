import React, { useEffect } from "react";
import { TOTAL_CARDS } from "../util/getRandomCards";

type TimerProps = {
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    clearedCards: number;
    plus5: boolean;
};
const Timer = ({ seconds, setSeconds, clearedCards, plus5 }: TimerProps) => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        if (clearedCards >= TOTAL_CARDS) clearInterval(intervalId);

        return () => clearInterval(intervalId);
    }, [clearedCards]);

    const minutes: number = Math.floor((seconds % 3600) / 60);
    const remainingSeconds: number = seconds % 60;

    return (
        <div>
            <h2>Timer:</h2>
            <div className="timer-text">
                <p>{`${minutes.toString().padStart(2, "0")}:${remainingSeconds
                    .toString()
                    .padStart(2, "0")}`}</p>
                {plus5 && <p className="flash">+5</p>}
            </div>
        </div>
    );
};

export default Timer;
