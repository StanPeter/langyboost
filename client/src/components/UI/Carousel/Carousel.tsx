// import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// import { Course } from 'ts/interfaces';
// import { Direction } from 'ts/types';
// import styles from './carousel.module.scss';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Mousewheel, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// interface CarouselProps {
//     data: Course[];
//     onChange: Dispatch<SetStateAction<string>>;
//     value: string;
// }

// const Carousel: React.FC<CarouselProps> = ({ data, onChange, value }) => {
//     const [animate, setAnimate] = useState(false);
//     const [values, setValues] = useState<Course[]>(data.slice(0, 5));
//     const [chosenValue, setChosenValue] = useState<Course | null>(null);

//     useEffect(() => {
//         if (value !== chosenValue?.value) {
//             const possibleValues = data.map(d => d.value);
//             if (possibleValues.includes(value)) onSwitchHandler(null, value);
//             else setChosenValue(null);
//         }
//     }, [value]);

//     const getItemIndex = (mainIdx: number, step: 1 | 2, direction: Direction) => {
//         const lastIndex = data.length - 1;
//         const firstIndex = 0;

//         let result = direction === 'left' ? mainIdx - step : mainIdx + step;

//         //for direction left, if it overflows then set to one of two last items, same for opposite direction
//         if (result < firstIndex) result = result === -1 ? lastIndex : lastIndex - 1;
//         else if (result > lastIndex) result = result === lastIndex + 1 ? firstIndex : firstIndex + 1;

//         return result;
//     };

//     const onSwitchHandler = (direction?: Direction | null, clickedVal?: string) => {
//         //for arrow handling there is direction filled, for click handling there is index clicked number
//         if (!direction && !clickedVal) {
//             console.log('NOT FILLED PARAMS FOR THE FUNCTION');
//             return;
//         } else if (clickedVal && values[2].value === clickedVal) {
//             const newChosenValue = chosenValue ? null : values[2];
//             onChange(newChosenValue?.value || '');
//             setChosenValue(newChosenValue);
//             return;
//         }

//         let chosenIndex;

//         if (direction) {
//             chosenIndex = getItemIndex(
//                 data.findIndex((course: Course) => course.value === chosenValue?.value),
//                 1,
//                 direction,
//             );
//         } else if (clickedVal) {
//             chosenIndex = data.findIndex((course: Course) => course.value === clickedVal);
//         }

//         //@ts-ignore
//         setNewCourses(chosenIndex);
//     };

//     const setNewCourses = async (chosenIndex: number) => {
//         if (animate) return;

//         const newValues = [
//             data[getItemIndex(chosenIndex, 2, 'left')],
//             data[getItemIndex(chosenIndex, 1, 'left')],
//             data[chosenIndex],
//             data[getItemIndex(chosenIndex, 1, 'right')],
//             data[getItemIndex(chosenIndex, 2, 'right')],
//         ];

//         setAnimate(true);
//         setValues(newValues);
//         setChosenValue(newValues[2]);
//     };

//     console.log('rerender');

//     return (
//         <React.Fragment>
//             <div className={styles.courseWrapper}>
//                 {values.length > 0 ? (
//                     <React.Fragment>
//                         <FiArrowLeft onClick={() => onSwitchHandler('left')} className={styles.sliderArrow} />
//                         {values.map((val, idx) => (
//                             <div
//                                 className={`${styles.course} ${animate ? styles.animate : ''} ${
//                                     chosenValue?.value === val.value ? styles.chosen : ''
//                                 } `}
//                                 key={idx}
//                                 style={{ backgroundImage: `url(${val.imgSrc})` }}
//                                 onClick={() => onSwitchHandler(null, val.value)}
//                                 onAnimationEnd={() => {
//                                     setAnimate(false);
//                                     if (chosenValue && chosenValue?.value !== value) onChange(chosenValue.value);
//                                 }}
//                             >
//                                 <p>{val.name}</p>
//                             </div>
//                         ))}
//                         <FiArrowRight onClick={() => onSwitchHandler('right')} className={styles.sliderArrow} />
//                     </React.Fragment>
//                 ) : (
//                     <p>No available courses</p>
//                 )}
//             </div>
//             {chosenValue ? <p className={styles.courseInfo}>{chosenValue.text}</p> : null}
//         </React.Fragment>
//     );
// };

// export default Carousel;

import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Course } from 'ts/interfaces';
import styles from './carousel.module.scss';

interface CarouselProps {
    data: Course[];
    onChange: Dispatch<SetStateAction<string>>;
    value: string;
}

const Carousel: React.FC<CarouselProps> = ({ data, onChange, value }) => {
    const [chosenValue, setChosenValue] = useState<Course | null>(data.find(course => course.value === value) || null);

    // Sync local state with external value changes
    useEffect(() => {
        const newChosenValue = data.find(course => course.value === value) || null;
        setChosenValue(newChosenValue);
    }, [value, data]);

    const handleSlideChange = (swiper: any) => {
        // Use realIndex to account for loop mode
        const realIndex = swiper.realIndex;
        const newValue = data[realIndex].value;
        onChange(newValue);
        setChosenValue(data[realIndex]);
    };

    const handleSlideClick = (clickedValue: string) => {
        const clickedIndex = data.findIndex(course => course.value === clickedValue);
        if (clickedIndex === -1) return;

        onChange(clickedValue);
        setChosenValue(data[clickedIndex]);
    };

    return (
        <Swiper
            modules={[Navigation, Mousewheel]}
            mousewheel={{ forceToAxis: true, sensitivity: 0.5 }}
            spaceBetween={20}
            slidesPerView={5}
            onSlideChange={handleSlideChange}
            speed={600}
            centeredSlides={true}
            navigation
            loop={true}
            loopAdditionalSlides={2}
            slideToClickedSlide={true}
            initialSlide={data.findIndex(course => course.value === value)}
            breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 4, spaceBetween: 15 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
        >
            {data.map((val, idx) => (
                <SwiperSlide key={val.value} virtualIndex={idx}>
                    <div className={`${styles.course} ${chosenValue?.value === val.value ? styles.chosen : ''}`}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={val.imgSrc}
                                alt={val.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={styles.image}
                            />
                        </div>
                        <p className={styles.courseTitle}>{val.name}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
