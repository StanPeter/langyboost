import PhraseCardsControls from 'components/others/PhraseCardsControls/PhraseCardsControls';
import { motion } from 'framer-motion';
import { Phrase } from 'graphql/generated/graphql';
import React, { useState } from 'react';
import styles from './cardPage.module.scss';

interface CardPageProps {
    data: Phrase[];
    index: number;
    numberOfCards: number;
    setNumberOfCards: React.Dispatch<React.SetStateAction<number>>;
}

const Card: React.FC<CardPageProps> = ({ data, setNumberOfCards, numberOfCards, index }) => {
    const [hideTranslation, setHidetranslation] = useState(true);
    const [animationChangeCard, setAnimationChangeCard] = useState(false);

    // const getCurrentPhrase = useMemo(() => {
    //     if (animationChangeCard && numberOfCards - 2 >= 0) return data[numberOfCards - 2].phrase;
    //     else if ((animationChangeCard && numberOfCards - 2 < 0) || numberOfCards - 1 < 0) return '';
    //     return data[numberOfCards - 1].phrase;
    // }, [animationChangeCard, numberOfCards]);

    console.log(data, 'PASSED DATA');

    return (
        <div
            className={`${styles.cardWrapper} ${animationChangeCard ? styles.animationChangeCard : ''}`}
            onAnimationEnd={() => {
                setNumberOfCards(numberOfCards - 1);
                setAnimationChangeCard(false);
            }}
            style={{
                left: '6%',
                top: 10 * index,
                zIndex: -1 * index,
                display: 'flex',
                position: 'absolute',
            }}
        >
            <div style={{ position: 'relative', width: '100%', display: 'flex', flexFlow: 'column' }}>
                <div className={styles.cardPhrase}>
                    <h2 className={`${hideTranslation ? styles.focused : ''}`}>{data[numberOfCards - 1].phrase}</h2>
                    {!hideTranslation ? (
                        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                            <hr className={styles.translationSeparator} />
                            <h3 className={styles.focused}>{data[numberOfCards - 1].translation}</h3>
                        </motion.div>
                    ) : null}
                </div>
                <hr className={styles.controlsSeparator} />
                <PhraseCardsControls
                    setHidetranslation={setHidetranslation}
                    setAnimationChangeCard={setAnimationChangeCard}
                    noMorePhrases={false}
                />
            </div>
        </div>
    );
};

export default Card;
