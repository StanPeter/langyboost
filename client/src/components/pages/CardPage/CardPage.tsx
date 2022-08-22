import PhraseCardsControls from "components/others/PhraseCardsControls/PhraseCardsControls";
import Tooltip from "components/ui/Tooltip/Tooltip";
import React, { useState } from "react";
import styles from "./cardPage.module.scss";
import MainBody from "components/layouts/MainBody/MainBody";
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

const CardPage: React.FC<CardPageProps> = () => {
    const [hideTranslation, setHidetranslation] = useState(true);
    const [animationChangeCard, setAnimationChangeCard] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    // const [noMorePhrases, setNoMorePhrases] = useState(false);

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
        <MainBody>
            <div className={styles.cardPage}>
                <div style={{ display: "flex" }}>
                    <h2>Card 7 of 50</h2>
                    <Tooltip />
                </div>
                <div
                    className={`${styles.card} ${
                        animationChangeCard ? styles.animationChangeCard : ""
                    }`}
                    onAnimationEnd={() => {
                        setCardIndex(cardIndex + 1);
                        setAnimationChangeCard(false);
                    }}
                >
                    <div className={styles.cardPhrase}>
                        <h2>
                            Denke lieber an das, was du hast
                            {/* {data.getPhrases[cardIndex]?.phrase ||
                                    "No more phrases"} */}
                        </h2>
                        {!hideTranslation ? <p>Not implemented</p> : null}
                    </div>

                    <hr className={styles.separator} />
                    <PhraseCardsControls
                        setHidetranslation={setHidetranslation}
                        setAnimationChangeCard={setAnimationChangeCard}
                        // noMorePhrases={noMorePhrases}
                        noMorePhrases={false}
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
        </MainBody>
    );
};

export default CardPage;
