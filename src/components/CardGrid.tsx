import React from "react";
import Card from "./Card";
import { randomCards } from "../util/getRandomCards";

type CardProps = {
    cardsSelected: string[];
    setCardsSelected: React.Dispatch<React.SetStateAction<string[]>>;
    clearedCards: string[];
};

const CardGrid = ({
    cardsSelected,
    setCardsSelected,
    clearedCards,
}: CardProps) => {
    return (
        <div className="card-grid">
            {randomCards.map((card, i) => (
                <Card
                    key={i}
                    card={card + "|" + i}
                    cardsSelected={cardsSelected}
                    clearedCards={clearedCards}
                    setCardsSelected={setCardsSelected}
                />
            ))}
        </div>
    );
};

export default CardGrid;
