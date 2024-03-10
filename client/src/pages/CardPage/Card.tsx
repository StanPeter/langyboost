import PhraseCardsControls from 'components/others/PhraseCardsControls/PhraseCardsControls';
import { motion } from 'framer-motion';
import { PhraseSchema } from 'graphql/generated/graphql';
import React, { useState } from 'react';
import styles from './cardPage.module.scss';

interface CardPageProps {
    data: PhraseSchema;
    // index: number;
    numberOfCards: number;
    setNumberOfCards: React.Dispatch<React.SetStateAction<number>>;
}

const Card: React.FC<CardPageProps> = ({ data, setNumberOfCards, numberOfCards }) => {
    const [hideTranslation, setHidetranslation] = useState(true);
    const [animationChangeCard, setAnimationChangeCard] = useState(false);
    const [blockHovered, setBlockHovered] = useState<null | 'rightCorrect' | 'leftWrong'>(null);

    // const getCurrentPhrase = useMemo(() => {
    //     if (animationChangeCard && numberOfCards - 2 >= 0) return data[numberOfCards - 2].phrase;
    //     else if ((animationChangeCard && numberOfCards - 2 < 0) || numberOfCards - 1 < 0) return '';
    //     return data[numberOfCards - 1].phrase;
    // }, [animationChangeCard, numberOfCards]);

    console.log(data, 'PASSED DATA');

    const cardPhraseClassses = [styles.cardPhrase];

    if (blockHovered === 'leftWrong') cardPhraseClassses.push(styles.blockHoveredLeftWrong);
    if (blockHovered === 'rightCorrect') cardPhraseClassses.push(styles.blockHoveredRightCorrect);

    return (
        <div
            className={`${styles.cardWrapper} ${animationChangeCard ? styles.animationChangeCard : ''}`}
            onAnimationEnd={() => {
                setNumberOfCards(numberOfCards - 1);
                setAnimationChangeCard(false);
            }}
            style={{ position: 'relative', width: '100%', display: 'flex', flexFlow: 'column' }}
        >
            {/* <div style={{ position: 'relative', width: '100%', display: 'flex', flexFlow: 'column' }}> */}
            <div className={cardPhraseClassses.join(' ')}>
                <div className="flex flex-col">
                    {/* <h2 className={`${hideTranslation ? 'styles.focused' : ''} underline`}>{data?.phrase}</h2> */}
                    <h2 className={'underline'}>{data?.phrase}</h2>
                    {!hideTranslation ? (
                        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                            <hr className={styles.translationSeparator} />
                            <h3 className={'styles.focused'}>{data?.translation || 'default test'}</h3>
                        </motion.div>
                    ) : null}
                </div>
                <PhraseCardsControls
                    setBlockHovered={setBlockHovered}
                    setHidetranslation={setHidetranslation}
                    setAnimationChangeCard={setAnimationChangeCard}
                    noMorePhrases={false}
                />
            </div>
            {/* <hr className={styles.controlsSeparator} /> */}
            {/* </div> */}
        </div>
    );
};

export default Card;
