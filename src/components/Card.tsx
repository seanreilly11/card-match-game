import React from "react";
import ReactCardFlip from "react-card-flip";
import BackOfCard from "./BackOfCard";
import FrontOfCard from "./FrontOfCard";

type CardProps = {
    card: string;
    cardsSelected: string[];
    clearedCards: string[];
    setCardsSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Card = ({
    card,
    cardsSelected,
    clearedCards,
    setCardsSelected,
}: CardProps) => {
    const onClick = () => {
        if (cardsSelected.length >= 2) return;
        setCardsSelected((prev) => {
            if (prev.length >= 2) return [...prev];
            return [...prev, card];
        });
    };
    return (
        <ReactCardFlip
            isFlipped={
                clearedCards.includes(card) || cardsSelected.includes(card)
                    ? true
                    : false
            }
        >
            <BackOfCard onClick={onClick} />
            <FrontOfCard card={card} />
        </ReactCardFlip>
    );
};

export default Card;
