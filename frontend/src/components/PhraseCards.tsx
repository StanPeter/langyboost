import React, { useState } from "react";
import PhraseCardsControls from 'components/PhraseCardsControls'

interface PhraseCard {
    text: string;
    translation: string;
}

interface PhraseCardsProps {
    card?: PhraseCard[];
}

const mockData = [
    {
        text: "Death is just the beginning",
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
    // {
    //     text: "Esta frase no es tan buena",
    //     translation: "Esta frase no es tan buena",
    // },
    // {
    //     text: "no es tan buena cómo la última",
    //     translation: " is not as good as the last one",
    // },
];

const PhraseCards: React.FC<PhraseCardsProps> = ({ card }) => {
    const [hideTranslation, setHidetranslation] = useState(true);
    const [animationChangeCard, setAnimationChangeCard] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);

    // const noMorePhrases: boolean = cardIndex >= mockData.length;

    return (
        <div className="card-wrapper">
            <div className="third-card"></div>
            <div className="second-card"></div>
            <div
                className={`card ${
                    animationChangeCard ? "animation-change-card" : ""
                }`}
                onAnimationEnd={() => {
                    setCardIndex(cardIndex + 1);
                    setAnimationChangeCard(false);
                }}
            >
                <div className="card-phrase">
                    <h2>{mockData[cardIndex]?.text || "No more phrases"}</h2>
                    {!hideTranslation ? (
                        <p>{mockData[cardIndex]?.translation}</p>
                    ) : null}
                </div>

                <hr className="separator" />
                <PhraseCardsControls
                    setHidetranslation={setHidetranslation}
                    setAnimationChangeCard={setAnimationChangeCard}
                />
            </div>
        </div>
    );
};

export default PhraseCards;
