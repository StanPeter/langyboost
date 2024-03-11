import PhraseCardsControls from 'components/others/PhraseCardsControls/PhraseCardsControls';
import { motion } from 'framer-motion';
import { PhraseSchema } from 'graphql/generated/graphql';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TCardMode } from 'ts/types';
import styles from './cardPage.module.scss';

interface CardPageProps {
    data: PhraseSchema;
    // index: number;
    numberOfCards: number;
    setNumberOfCards: React.Dispatch<React.SetStateAction<number>>;
}

const Card: React.FC<CardPageProps> = ({ data, setNumberOfCards, numberOfCards }) => {
    // const [hideTranslation, setHidetranslation] = useState(true);
    const [animationChangeCard, setAnimationChangeCard] = useState(false);
    const [cardMode, setCardMode] = useState<TCardMode>('none');
    const navigate = useNavigate();

    // const getCurrentPhrase = useMemo(() => {
    //     if (animationChangeCard && numberOfCards - 2 >= 0) return data[numberOfCards - 2].phrase;
    //     else if ((animationChangeCard && numberOfCards - 2 < 0) || numberOfCards - 1 < 0) return '';
    //     return data[numberOfCards - 1].phrase;
    // }, [animationChangeCard, numberOfCards]);

    useEffect(() => {
        if (numberOfCards === 0) setCardMode('finish');
    }, [numberOfCards]);

    console.log(data, 'PASSED DATA');

    const cardPhraseClassses = [styles.cardPhrase];

    if (cardMode === 'leftAnswerHovered') cardPhraseClassses.push(styles.cardModeLeftWrong);
    if (cardMode === 'rightAnswerHovered') cardPhraseClassses.push(styles.cardModeRightCorrect);
    if (cardMode === 'finish' || cardMode === 'continue') {
        cardPhraseClassses.push('hover:cursor-pointer');
        cardPhraseClassses.push(styles.cardModeContinue);
    }

    const continueHandler = () => {
        if (numberOfCards === 0) navigate('/courses');
        else {
            setCardMode('none');
            setAnimationChangeCard(true);
        }
    };

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
            <div
                className={`${cardPhraseClassses.join(' ')} hover:scale-105`}
                onClick={['continue', 'finish'].includes(cardMode) ? continueHandler : undefined}
            >
                <div className="flex flex-col flex-1 align-middle justify-center">
                    <h2>{numberOfCards === 0 ? 'No more phrases' : data?.phrase}</h2>
                    {numberOfCards === 0 && <p>{'(Click to return back)'}</p>}
                    {cardMode === 'continue' ? (
                        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                            <hr className={styles.translationSeparator} />
                            <h3 className={'styles.focused'}>{data?.translation || 'default test'}</h3>
                        </motion.div>
                    ) : null}
                </div>
                <PhraseCardsControls
                    setCardMode={setCardMode}
                    // setHidetranslation={setHidetranslation}
                    setAnimationChangeCard={setAnimationChangeCard}
                    cardMode={cardMode}
                    noMorePhrases={false}
                />
            </div>
            {/* <hr className={styles.controlsSeparator} /> */}
            {/* </div> */}
        </div>
    );
};

export default Card;
