import { Box, styled } from '@mui/material';
import Header from 'components/UI/Header';
import { LOGIN_FORM_TEXT } from 'constants/constants';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules

// const StyledIconFiArrowLeft = styled(FiArrowLeft)`
//     width: 20px;
//     height: 20px;
// `;

// const StyledIconFiArrowRight = styled(FiArrowRight)`
//     width: 20px;
//     height: 20px;
// `;

// const StyledArrowBox = styled(Box)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
// `;

// const StyledTextWrapper = styled(Box)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     width: 100%;
// `;

// const StyledWrapper = styled(Box)`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     justify-content: space-between;
//     align-items: center;
//     background-color: var(--color-main);
//     color: var(--color-text-light);
//     height: 10rem; // Converted 40 to rem for consistency
//     border-top-left-radius: 1.5rem; // Adjusted to match your theme
//     border-top-right-radius: 1.5rem;
// `;

// const StyledBox = styled(Box)`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     justify-content: space-between;
//     align-items: center;
// `;

// interface ISliderProps {}

// // might be used for other usecases in future

// const Slider: React.FC<ISliderProps> = ({}) => {
//     const [slideInfo, setSlideInfo] = useState<{ index: number; direction: 'none' | 'right' | 'left' }>({
//         index: 2,
//         direction: 'none',
//     });
//     const [lastClickTime, setLastClickTime] = useState(new Date());

//     // automate aniamtion
//     const autoAnimationHandler = () => {
//         const currentTime = new Date();
//         if (Math.floor(currentTime.getSeconds() - lastClickTime.getSeconds()) > 5) {
//             slideRightHandler();
//         }
//     };

//     // set interval to check each second
//     useInterval(autoAnimationHandler, 1000);

//     const slideLeftHandler = () => {
//         setSlideInfo(state => ({
//             direction: 'left',
//             index: state.index === 1 ? LOGIN_FORM_TEXT.length : state.index - 1,
//         }));
//         setLastClickTime(new Date());
//     };

//     const slideRightHandler = () => {
//         setSlideInfo(state => ({
//             direction: 'right',
//             index: state.index === LOGIN_FORM_TEXT.length ? 1 : state.index + 1,
//         }));

//         setLastClickTime(new Date());
//     };

//     const animationHandler = (indexOfHeader: number) => {
//         // left direction flow of animation
//         if (slideInfo.direction === 'left') {
//             if (indexOfHeader + 1 === slideInfo.index) return 'slideRightToZero';
//             else if (indexOfHeader + 1 === slideInfo.index + 1) return 'slideZeroToLeft';
//         }
//         // right direction flow of animation

//         if (slideInfo.direction === 'right') {
//             if (indexOfHeader + 1 === slideInfo.index) return 'slideLeftToZero';
//             else if (indexOfHeader + 1 === slideInfo.index - 1) return 'slideZeroToRight';
//         }

//         // initial state for animation
//         if (slideInfo.direction === 'none' && indexOfHeader + 1 === 2) return '';

//         // do not display elements other than the 2 animated
//         return 'hidden';
//     };

//     return (
//         <StyledWrapper>
//             <StyledArrowBox onClick={slideLeftHandler}>
//                 <StyledIconFiArrowLeft />
//             </StyledArrowBox>
//             <StyledBox>
//                 {LOGIN_FORM_TEXT.map((slideText, i: number) => (
//                     <StyledTextWrapper key={slideText} className={`${animationHandler(i)}`}>
//                         <Header level={2} whiteText text={slideText} />
//                     </StyledTextWrapper>
//                 ))}
//             </StyledBox>
//             <StyledArrowBox onClick={slideRightHandler}>
//                 <StyledIconFiArrowRight />
//             </StyledArrowBox>
//         </StyledWrapper>
//     );
// };

const StyledWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-main);
    color: var(--color-text-light);
    height: 10rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
`;

const Slider: React.FC = () => {
    return (
        <StyledWrapper>
            <Swiper modules={[Navigation]} navigation spaceBetween={50} slidesPerView={1}>
                {LOGIN_FORM_TEXT.map((slideText, i) => (
                    <SwiperSlide key={i}>
                        <Header level={2} whiteText text={slideText} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledWrapper>
    );
};

export default Slider;
