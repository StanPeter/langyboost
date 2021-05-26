import React, { useState } from "react";
import Button from "components/Button";
import "styles/card.scss";

interface CardProps {}

const mockData = [
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last",
    },
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
];

const Card: React.FC<CardProps> = ({}) => {
    const [hideTranslation, setHidetranslation] = useState(true);

    const knownHandler = () => {};

    const unKnownHandler = () => {
        setHidetranslation(false);
    };

    const nextHandler = () => {
        setHidetranslation(true);
    };

    return (
        <div className="card-wrapper">
            {/* <Button onClick={nextHandler} text={"next"} /> */}

            {mockData.map((d, idx: number) => (
                <div className="full-card" key={idx}>
                    <div className="card">
                        <div className="card-phrase phrase">
                            <p>{d.text}</p>
                        </div>
                        <hr className="separator" />
                        <div
                            className={[
                                "card-phrase",
                                "translation",
                                hideTranslation ? "" : "show",
                            ].join(" ")}
                        >
                            <p>{d.translation}</p>
                        </div>
                    </div>
                    <div className="card-controls">
                        <Button onClick={knownHandler} text={"known"} />
                        <Button onClick={unKnownHandler} text={"unknown"} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
