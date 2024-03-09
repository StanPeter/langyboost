import Spinner from 'components/UI/Spinner/Spinner';
import Tooltip from 'components/UI/Tooltip/Tooltip';
import MainBody from 'components/layouts/MainBody/MainBody';
import { useGetPhrasesQuery } from 'graphql/generated/graphql';
import React, { useState } from 'react';
import Card from './Card';
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
    const { data, error, loading } = useGetPhrasesQuery({});
    const [numberOfCards, setNumberOfCards] = useState(5);
    // const [phrases, setPhrases] = useState(data?.getPhrases.slice(0, 20) || []);
    // const [noMorePhrases, setNoMorePhrases] = useState(false);

    // useEffect(() => {
    //     if (cardIndex >= data.length) {
    //         setNoMorePhrases(true);
    //     }
    // }, [cardIndex]);

    // if (loading) return <Spinner />;
    // if (!phrases) return null;

    // if (cardIndex >= data.length && !noMorePhrases) setNoMorePhrases(true);

    /*
    network-only makes it to do a request every single time
    const { data, loading } = useHelloQuery({ fetchPolicy: "network-only" });
    */

    if ((data?.getPhrases && data.getPhrases.length < 1) || error) return null;
    if (loading) return <Spinner />;

    const phrases = data?.getPhrases.slice(0, numberOfCards) || [];
    console.log(data, phrases);

    return (
        <MainBody>
            <div className={styles.cardPage} style={{ position: 'relative' }}>
                <div>
                    <h2>
                        Card {numberOfCards ? phrases.length - numberOfCards + 1 : phrases.length} of {phrases.length}
                    </h2>
                    <Tooltip />
                </div>
                <div>
                    {numberOfCards === 0 ? (
                        <div
                            className={`${styles.cardWrapper}`}
                            style={{
                                left: '6%',
                                top: 0,
                                display: 'flex',
                                position: 'absolute',
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', display: 'flex', flexFlow: 'column' }}>
                                <div className={styles.cardPhrase}>
                                    <h2 className={styles.focused}>NO MORE PHRASES</h2>
                                </div>
                                <hr className={styles.controlsSeparator} />
                                <i>
                                    <p>{'Return to courses'}</p>
                                </i>
                            </div>
                        </div>
                    ) : (
                        [...Array(numberOfCards)].map((_d, i) => (
                            <Card
                                data={phrases || []}
                                numberOfCards={numberOfCards}
                                setNumberOfCards={setNumberOfCards}
                                index={i}
                            />
                        ))
                    )}
                </div>
            </div>
        </MainBody>
    );
};

export default CardPage;
