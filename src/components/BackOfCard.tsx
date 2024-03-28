import React from "react";

type CardProps = {
    onClick: () => void;
};

const BackOfCard = ({ onClick }: CardProps) => {
    return <div className="card back" onClick={onClick}></div>;
};

export default BackOfCard;
