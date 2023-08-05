import React, { useState } from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import styles from './phraseCardsControls.module.scss';

interface PhraseCardsControlsProps {
    setHidetranslation: Function;
    setAnimationChangeCard: Function;
    noMorePhrases: boolean;
}

type IconName = 'thumbsDown' | 'thumbsUp';

const PhraseCardsControls: React.FC<PhraseCardsControlsProps> = ({
    setHidetranslation,
    setAnimationChangeCard,
    noMorePhrases
}) => {
    const [hideContinue, setHideContinue] = useState(true);

    const onClickHandler = (_e: React.MouseEvent<HTMLElement>, iconName: IconName) => {
        if (iconName === 'thumbsUp') setAnimationChangeCard(true);
        else if (iconName === 'thumbsDown') {
            setHideContinue(false);
            setHidetranslation(false);
        }
    };

    const onContinueClickHandler = (_e: React.MouseEvent<HTMLElement>) => {
        setHideContinue(true);
        setHidetranslation(true);
        setAnimationChangeCard(true);
    };

    const cardControlContinueClasses = (): string => {
        const out = [styles.controlContinue];

        if (noMorePhrases) out.push('disabled');

        return out.join(' ');
    };

    console.log('rerender');

    return (
        <div className={styles.controls}>
            {hideContinue && !noMorePhrases ? (
                <div className={styles.controlThumbsDown} onClick={e => onClickHandler(e, 'thumbsDown')}>
                    <i>
                        <FiThumbsDown />
                    </i>
                </div>
            ) : null}
            {hideContinue && !noMorePhrases ? (
                <div className={styles.controlThumbsUp} onClick={e => onClickHandler(e, 'thumbsUp')}>
                    <div>
                        <i>
                            <FiThumbsUp />
                        </i>
                    </div>
                    <div></div>
                </div>
            ) : null}
            {!hideContinue || noMorePhrases ? (
                <div
                    className={cardControlContinueClasses()}
                    onClick={!noMorePhrases ? onContinueClickHandler : undefined}
                >
                    <i>
                        <p>{!noMorePhrases ? 'Continue' : 'All phrases learned!'}</p>
                    </i>
                </div>
            ) : null}
        </div>
    );
};

export default PhraseCardsControls;
