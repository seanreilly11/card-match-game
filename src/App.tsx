import React, { useEffect, useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import Timer from "./components/Timer";
import EndOfGame from "./components/EndOfGame";
import { TOTAL_CARDS } from "./util/getRandomCards";

function App() {
    const [cardsSelected, setCardsSelected] = useState<string[]>([]);
    const [clearedCards, setClearedCards] = useState<string[]>([]);
    const [openedCards, setOpenedCards] = useState<string[]>([]);
    const [seconds, setSeconds] = useState<number>(0);
    const [plus5, setPlus5] = useState(false);

    useEffect(() => {
        if (cardsSelected.length >= 2) checkCards();
    }, [cardsSelected]);

    const checkCards = () => {
        if (cardsSelected[0].split("|")[0] === cardsSelected[1].split("|")[0]) {
            setClearedCards((prev) => [
                ...prev,
                cardsSelected[0],
                cardsSelected[1],
            ]);
            setTimeout(() => clearCards(), 200);
        }
        if (cardsSelected[0].split("|")[0] !== cardsSelected[1].split("|")[0]) {
            setTimeout(() => clearCards(), 1500);
            if (
                openedCards.includes(cardsSelected[0]) ||
                openedCards.includes(cardsSelected[1])
            ) {
                setSeconds((prev) => prev + 5);
                setPlus5(true);
                setTimeout(() => setPlus5(false), 3000);
            }

            setOpenedCards((prev: string[]) => [
                ...prev,
                cardsSelected[0],
                cardsSelected[1],
            ]);
        }
    };

    const clearCards = () => setCardsSelected([]);

    return (
        <main>
            <CardGrid
                cardsSelected={cardsSelected}
                setCardsSelected={setCardsSelected}
                clearedCards={clearedCards}
            />
            <div>
                <div className="title-text">
                    <h1>Card match game</h1>
                    <h6>By Sean Reilly</h6>
                </div>

                <Timer
                    seconds={seconds}
                    setSeconds={setSeconds}
                    clearedCards={clearedCards.length}
                    plus5={plus5}
                />
            </div>
            {clearedCards.length >= TOTAL_CARDS && (
                <EndOfGame seconds={seconds} />
            )}
        </main>
    );
}

export default App;
