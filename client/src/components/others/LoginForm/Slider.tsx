import Header from 'components/UI/Header/Header';
import { LOGIN_FORM_TEXT } from 'constants/constants';
import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import globalStyles from 'styles/globalStyles.module.scss';
import { useInterval } from 'usehooks-ts';

interface ISliderProps {}

// might be used for other usecases in future
const Slider: React.FC<ISliderProps> = ({}) => {
    const [slideInfo, setSlideInfo] = useState<{ index: number; direction: 'none' | 'right' | 'left' }>({
        index: 2,
        direction: 'none',
    });
    const [lastClickTime, setLastClickTime] = useState(new Date());

    // automate aniamtion
    const autoAnimationHandler = () => {
        const currentTime = new Date();
        if (Math.floor(currentTime.getSeconds() - lastClickTime.getSeconds()) > 5) {
            slideRightHandler();
        }
    };

    // set interval to check each second
    useInterval(autoAnimationHandler, 1000);

    const slideLeftHandler = () => {
        setSlideInfo(state => ({
            direction: 'left',
            index: state.index === 1 ? LOGIN_FORM_TEXT.length : state.index - 1,
        }));
        setLastClickTime(new Date());
    };

    const slideRightHandler = () => {
        setSlideInfo(state => ({
            direction: 'right',
            index: state.index === LOGIN_FORM_TEXT.length ? 1 : state.index + 1,
        }));

        setLastClickTime(new Date());
    };

    const animationHandler = (indexOfHeader: number) => {
        // left direction flow of animation
        if (slideInfo.direction === 'left') {
            if (indexOfHeader + 1 === slideInfo.index) return globalStyles.slideRightToZero;
            else if (indexOfHeader + 1 === slideInfo.index + 1) return globalStyles.slideZeroToLeft;
        }
        // right direction flow of animation
        if (slideInfo.direction === 'right') {
            if (indexOfHeader + 1 === slideInfo.index) return globalStyles.slideLeftToZero;
            else if (indexOfHeader + 1 === slideInfo.index - 1) return globalStyles.slideZeroToRight;
        }

        // initial state for animation
        if (slideInfo.direction === 'none' && indexOfHeader + 1 === 2) return '';

        // do not display elements other than the 2 animated
        return 'hidden';
    };

    return (
        <div
            className={
                'flex flex-row w-full justify-between items-center bg-[var(--color-main)] text-[var(--color-text-light)] h-40 rounded-t-3xl'
            }
        >
            <div onClick={slideLeftHandler} className="h-full items-center flex pr-10 cursor-pointer hover:scale-110">
                <FiArrowLeft className={'w-8 h-8'} />
            </div>
            <div className={`flex-1 justify-center relative items-center flex`}>
                {LOGIN_FORM_TEXT.map((slideText, i: number) => (
                    <div key={slideText} className={`text-center absolute w-full  ${animationHandler(i)}`}>
                        <Header level={2} whiteText text={slideText} />
                    </div>
                ))}
            </div>
            <div onClick={slideRightHandler} className="h-full items-center flex pl-10 cursor-pointer hover:scale-110">
                <FiArrowRight className={'w-8 h-8'} />
            </div>
        </div>
    );
};

export default Slider;
