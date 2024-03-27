import React, { useEffect, useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import Timer from "./components/Timer";
import EndOfGame from "./components/EndOfGame";

function App() {
    const [cardsSelected, setCardsSelected] = useState<string[]>([]);
    const [clearedCards, setClearedCards] = useState<string[]>([]);
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
        if (cardsSelected[0].split("|")[0] !== cardsSelected[1].split("|")[0])
            setTimeout(() => clearCards(), 2000);
    };

    const clearCards = () => setCardsSelected([]);
    console.log(cardsSelected);
    console.log(clearedCards);
    return (
        <main>
            <CardGrid
                cardsSelected={cardsSelected}
                setCardsSelected={setCardsSelected}
                clearedCards={clearedCards}
            />
            <Timer />
            {clearedCards.length === 36 && <EndOfGame />}
        </main>
    );
}

export default App;
