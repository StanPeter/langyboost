import MainBody from 'components/layouts/MainBody/MainBody';
import PhraseCardsControls from 'components/others/PhraseCardsControls/PhraseCardsControls';
import Tooltip from 'components/UI/Tooltip/Tooltip';
import React, { useState } from 'react';
import styles from './cardPage.module.scss';
// import { useGetPhrasesQuery } from "graphql/generated/graphql";
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

    /*
    //network-only makes it to do a request every single time
    const { data, loading } = useHelloQuery({ fetchPolicy: "network-only" });

    if (!data || error) return null;
    if (loading) return <Spinner />;
    */

    return (
        <MainBody>
            <div className={styles.cardPage}>
                <div>
                    <h2>Card 7 of 50</h2>
                    <Tooltip />
                </div>
                <div
                    className={`${styles.cardWrapper} ${animationChangeCard ? styles.animationChangeCard : ''}`}
                    onAnimationEnd={() => {
                        setCardIndex(cardIndex + 1);
                        setAnimationChangeCard(false);
                    }}
                >
                    <div className={styles.cardPhrase}>
                        <h2 className={`${hideTranslation ? styles.focused : ''}`}>
                            Denke lieber an das, was du hast
                            {/* {data.getPhrases[cardIndex]?.phrase ||
                                    "No more phrases"} */}
                        </h2>
                        {!hideTranslation ? (
                            <React.Fragment>
                                <hr className={styles.translationSeparator} style={{ width: '50%' }} />
                                <h3 className={styles.focused}>Not implemented</h3>
                            </React.Fragment>
                        ) : null}
                    </div>

                    <hr className={styles.controlsSeparator} />
                    <PhraseCardsControls
                        setHidetranslation={setHidetranslation}
                        setAnimationChangeCard={setAnimationChangeCard}
                        // noMorePhrases={noMorePhrases}
                        noMorePhrases={false}
                    />
                </div>
            </div>
        </MainBody>
    );
};

export default CardPage;
