import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PhraseCardsControls from "components/PhraseCardsControls";
import React, { useState } from "react";
// import { useGetPhrasesQuery } from "generated/graphql";
// import Spinner from "./Spinner";

// interface PhraseCard {
//     text: string;
//     translation: string;
// }

// interface PhraseCardsProps {
//     card?: PhraseCard[];
// }

interface CardPageProps {}

const CardPage: React.FC<CardPageProps> = ({}) => {
    const [hideTranslation, setHidetranslation] = useState(true);
    const [animationChangeCard, setAnimationChangeCard] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [noMorePhrases, setNoMorePhrases] = useState(false);

    // const { data, error } = useGetPhrasesQuery({});

    // useEffect(() => {
    //     if (cardIndex >= data.getPhrases.length) {
    //         setNoMorePhrases(true);
    //     }
    // }, [cardIndex]);

    // if (!data || error) return null;
    // if (loading) return <Spinner />;

    // if (cardIndex >= data.getPhrases.length && !noMorePhrases)
    //     setNoMorePhrases(true);

    return (
        <div className="appWrapper">
            <Navbar />

            <div className="bodyWrapper">
                <div className="CardPage">
                    {/* <div className="header">
                        <h2>Card 7 of 50</h2>
                    </div> */}

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
                            <h2>
                                Denke lieber an das, was du hast
                                {/* {data.getPhrases[cardIndex]?.phrase ||
                                    "No more phrases"} */}
                            </h2>
                            {!hideTranslation ? <p>Not implemented</p> : null}
                        </div>

                        <hr className="separator" />
                        <PhraseCardsControls
                            setHidetranslation={setHidetranslation}
                            setAnimationChangeCard={setAnimationChangeCard}
                            noMorePhrases={noMorePhrases}
                        />
                    </div>
                    {/* 
                    <div className="card">
                        <p className="card-text">
                            Denke lieber an das, was du hast
                        </p>
                        <hr className="separator" />
                        <PhraseCardsControls />
                    </div> */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CardPage;
