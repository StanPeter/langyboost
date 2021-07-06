import React, { EventHandler, useState } from "react";
import Button from "components/Button";
import { GrFormCheckmark, GrFormClose } from "react-icons/gr";
import { GiBananaBunch, GiBanana } from "react-icons/gi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

interface Card {
    text: string;
    translation: string;
}

interface CardProps {
    card: Card[];
}

const SingleCard: React.FC<CardProps> = ({ card }) => {
    const [hideTranslation, setHidetranslation] = useState(true);
    const [hideThumpsUp, setHideThumpsUp] = useState(true);
    const [hideThumpsDown, setHideThumpsDown] = useState(true);
    const [hideContinue, setHideContinue] = useState(true);
    const [animationContinue, setAnimationContinue] = useState(false);
    const [animationOk, setAnimationOK] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);

    const knownHandler = () => {};

    const unKnownHandler = () => {
        setHidetranslation(false);
    };

    const hideIcon = (
        e: React.MouseEvent<HTMLElement>,
        iconName: "thumbsDown" | "thumbsUp"
    ) => {
        if (iconName === "thumbsDown") {
            setHideThumpsDown(false);
        } else if (iconName === "thumbsUp") {
            setHideThumpsUp(false);
        }
    };

    const showIcon = (
        e: React.MouseEvent<HTMLElement>,
        iconName: "thumbsDown" | "thumbsUp"
    ) => {
        if (iconName === "thumbsDown") {
            setHideThumpsDown(true);
        } else if (iconName === "thumbsUp") {
            setHideThumpsUp(true);
        }
    };

    const onClickHandler = (
        e: React.MouseEvent<HTMLElement>,
        iconName: "thumbsDown" | "thumbsUp"
    ) => {
        if (iconName === "thumbsUp") {
            // setCardIndex(cardIndex + 1);
            setAnimationOK(true);
        } else if (iconName === "thumbsDown") {
            setHidetranslation(false);
            setHideContinue(false);
        }
    };

    const onContinueClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        setHideContinue(true);
        setHidetranslation(true);
        setAnimationContinue(false);
    };

    console.log(cardIndex, card.length);

    return (
        <>
            <div className="third-card"></div>
            <div className="second-card"></div>
            <div
                className={`card ${
                    animationOk ? "card-success" : ""
                }`}
                onAnimationEnd={() => {
                    setCardIndex(cardIndex + 1);
                    setHideThumpsDown(true);

                    if (animationOk) {
                        setAnimationOK(false);
                    }
                }}
            >
                <div className="card-phrase">
                    <h2>{card[cardIndex]?.text || "No more phrases"}</h2>
                    {!hideTranslation ? (
                        <p>{card[cardIndex].translation}</p>
                    ) : null}
                </div>

                <hr className="separator" />
                <div className="card-controls">
                    {hideContinue ? (
                        <i
                            className="card-control-icon-false"
                            onMouseLeave={(e) => showIcon(e, "thumbsDown")}
                            onMouseEnter={(e) => hideIcon(e, "thumbsDown")}
                            onClick={(e) => onClickHandler(e, "thumbsDown")}
                        >
                            {hideThumpsDown ? (
                                <FiThumbsDown />
                            ) : (
                                <p>Failure?</p>
                            )}
                        </i>
                    ) : null}
                    {hideContinue ? (
                        <i
                            className="card-control-icon-true"
                            onMouseLeave={(e) => showIcon(e, "thumbsUp")}
                            onMouseEnter={(e) => hideIcon(e, "thumbsUp")}
                            onClick={(e) => onClickHandler(e, "thumbsUp")}
                        >
                            {hideThumpsUp ? <FiThumbsUp /> : <p>Got it!</p>}
                        </i>
                    ) : null}
                    {!hideContinue ? (
                        <i
                            className={`card-control-icon-continue ${
                                animationContinue ? "width-max" : ""
                            }`}
                            onMouseOver={() => setAnimationContinue(true)}
                            onClick={onContinueClickHandler}
                        >
                            <p>Continue</p>
                        </i>
                    ) : null}
                </div>
            </div>
        </>
        // <div className="full-card">
        //     <div className="card">
        //         <div className="card-phrase phrase">
        //             <p>{card.text}</p>
        //         </div>
        //         <hr className="separator" />
        //         <div
        //             className={[
        //                 "card-phrase",
        //                 "translation",
        //                 hideTranslation ? "" : "show",
        //             ].join(" ")}
        //         >
        //             <p>{card.translation}</p>
        //         </div>
        //     </div>
        //     <div className="card-controls">
        //         <Button onClick={knownHandler} text={"known"} />
        //         <Button onClick={unKnownHandler} text={"unknown"} />
        //     </div>
        // </div>
    );
};

export default SingleCard;
