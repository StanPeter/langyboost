import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { PiArrowBendUpRightFill } from 'react-icons/pi';
import { TCardMode } from 'ts/types';
import styles from './phraseCardsControls.module.scss';

interface PhraseCardsControlsProps {
    // setHidetranslation: Function;
    setAnimationChangeCard: Function;
    noMorePhrases: boolean;
    setCardMode: React.Dispatch<React.SetStateAction<TCardMode>>;
    cardMode: TCardMode;
}

type IconName = 'thumbsDown' | 'thumbsUp';

const PhraseCardsControls: React.FC<PhraseCardsControlsProps> = ({
    // setHidetranslation,
    setAnimationChangeCard,
    noMorePhrases,
    setCardMode,
    cardMode,
}) => {
    // const [hideContinue, setHideContinue] = useState(true);

    const onClickHandler = (_e: React.MouseEvent<HTMLElement>, iconName: IconName) => {
        if (iconName === 'thumbsUp') setAnimationChangeCard(true);
        else if (iconName === 'thumbsDown') {
            // setHideContinue(false);
            // setHidetranslation(false);
            setCardMode('continue');
        }
    };

    // const onContinueClickHandler = (_e: React.MouseEvent<HTMLElement>) => {
    //     // setHideContinue(true);
    //     // setHidetranslation(true);
    //     setAnimationChangeCard(true);
    // };

    // const cardControlContinueClasses = (): string => {
    //     const out = [styles.controlContinue];

    //     if (noMorePhrases) out.push('disabled');

    //     return out.join(' ');
    // };

    const cardModeHandler = (event: 'enter' | 'leave', type: 'leftAnswerHovered' | 'rightAnswerHovered') => {
        console.log('HANDLER');

        if (event === 'leave') setCardMode('none');
        else {
            if (type === 'leftAnswerHovered') setCardMode('leftAnswerHovered');
            else setCardMode('rightAnswerHovered');
        }
    };

    console.log('rerender');

    return (
        // <div className={styles.controls}>
        <>
            {cardMode !== 'continue' && cardMode !== 'finish' && !noMorePhrases ? (
                <div
                    onMouseEnter={() => cardModeHandler('enter', 'leftAnswerHovered')}
                    onMouseLeave={() => cardModeHandler('leave', 'leftAnswerHovered')}
                    className={styles.controlThumbsDown}
                    onClick={e => onClickHandler(e, 'thumbsDown')}
                >
                    <i>
                        <FiThumbsDown />
                    </i>
                </div>
            ) : null}
            {cardMode !== 'continue' && cardMode !== 'finish' && !noMorePhrases ? (
                <div
                    onMouseEnter={() => cardModeHandler('enter', 'rightAnswerHovered')}
                    onMouseLeave={() => cardModeHandler('leave', 'rightAnswerHovered')}
                    className={styles.controlThumbsUp}
                    onClick={e => onClickHandler(e, 'thumbsUp')}
                >
                    <i>
                        <FiThumbsUp />
                    </i>
                </div>
            ) : null}
            {cardMode === 'continue' && (
                <div
                    className={styles.controlContinueUp}
                    // onClick={e => onClickHandler(e, 'thumbsDown')}
                >
                    <i>
                        <PiArrowBendUpRightFill />
                    </i>
                </div>
            )}
            {cardMode === 'continue' && (
                <div
                    className={styles.controlContinueDown}
                    // onClick={e => onClickHandler(e, 'thumbsDown')}
                >
                    <i>
                        <PiArrowBendUpRightFill />
                    </i>
                </div>
            )}
            {/* {!hideContinue || noMorePhrases ? (
                <div className={`${styles.controlContinue} m-2`} onClick={!noMorePhrases ? onContinueClickHandler : undefined}>
                    <p>{!noMorePhrases ? 'Continue' : 'All phrases learned!'}</p>
                </div>
            ) : null} */}
            {/* </div> */}
        </>
    );
};

export default PhraseCardsControls;
