import React from "react";

const FrontOfCard = ({ card }: { card: string }) => {
    const image = require(`../assets/png/${card.split("|")[0]}.png`);

    return (
        <div className="card">
            <img src={image} alt={card.split("|")[0]} className="card-image" />
        </div>
    );
};

export default FrontOfCard;
