import React, { useState } from "react";
import Button from "components/Button";
import "styles/card.scss";

interface Card {
    text: string;
    translation: string;
}

interface CardProps {
    card: Card;
}

const SingleCard: React.FC<CardProps> = ({ card }) => {
    const [hideTranslation, setHidetranslation] = useState(true);

    const knownHandler = () => {};

    const unKnownHandler = () => {
        setHidetranslation(false);
    };

    // const nextHandler = () => {
    //     setHidetranslation(true);
    // };

    return (
        <div className="full-card">
            <div className="card">
                <div className="card-phrase phrase">
                    <p>{card.text}</p>
                </div>
                <hr className="separator" />
                <div
                    className={[
                        "card-phrase",
                        "translation",
                        hideTranslation ? "" : "show",
                    ].join(" ")}
                >
                    <p>{card.translation}</p>
                </div>
            </div>
            <div className="card-controls">
                <Button onClick={knownHandler} text={"known"} />
                <Button onClick={unKnownHandler} text={"unknown"} />
            </div>
        </div>
    );
};

export default SingleCard;
