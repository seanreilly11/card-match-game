import React from "react";

type CardProps = {
    card: string;
};

const FrontOfCard = ({ card }: CardProps) => {
    return <div className="card">{card}</div>;
};

export default FrontOfCard;
