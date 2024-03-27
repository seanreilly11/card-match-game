import React from "react";

type CardProps = {
    onClick: () => void;
};

const BackOfCard = ({ onClick }: CardProps) => {
    return (
        <div className="card back" onClick={onClick}>
            Back of card
        </div>
    );
};

export default BackOfCard;
