import React from "react";
import Button from "components/Button";
import "styles/card.scss";

interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
    return (
        <div className="card">
            <div className="card-phrase">Test phrase</div>
            <hr className="separator" />
            <div className="card-phrase translation">Test translation</div>
            <div className="card-controls">
                <Button text={"known"} />
                <Button text={"unknown"} />
            </div>
        </div>
    );
};

export default Card;
