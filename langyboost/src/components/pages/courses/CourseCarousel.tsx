import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Course } from 'ts/interfaces';

const StyledImage = styled(Image)`
    position: unset !important;
    height: 75px !important;
    width: 100% !important;
    border-radius: 100%;
`;

const StyledImageContainer = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledCourseInfo = styled('p')`
    border: 1.5px solid var(--color-dark-accent);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 45px 15px;
    width: 72%;
    height: 150px;
    overflow: hidden;
    padding: 1rem;
    margin-top: 1.5rem;
    font-style: italic;
    font-weight: 300;
`;

const StyledCourseBox = styled(Box)<{ $isChosen: boolean }>`
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    & p {
        text-shadow:
            -1px 0 var(--color-text-dark),
            0 1px var(--color-text-dark),
            1px 0 var(--color-text-dark),
            0 -1px var(--color-text-dark);
        color: var(--color-text-light);
    }

    scale: ${({ $isChosen }) => ($isChosen ? '1.1' : '0.9')};
`;

interface ICourseCarouselProps {
    data: Course[];
    onChange: Dispatch<SetStateAction<string>>;
    value: string;
}

const CourseCarousel: React.FC<ICourseCarouselProps> = ({ data, onChange, value }) => {
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
        <>
            <Swiper
                modules={[Navigation, Mousewheel]}
                mousewheel={{ forceToAxis: true, sensitivity: 0.5 }}
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={handleSlideChange}
                speed={600}
                style={{ width: '100%' }}
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
                        <StyledCourseBox $isChosen={chosenValue?.value === val.value}>
                            <StyledImageContainer>
                                <StyledImage
                                    src={val.imgSrc}
                                    alt={val.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </StyledImageContainer>
                            <p style={{ position: 'absolute' }}>{val.name}</p>
                        </StyledCourseBox>
                    </SwiperSlide>
                ))}
            </Swiper>
            {chosenValue ? <StyledCourseInfo>{chosenValue.text}</StyledCourseInfo> : null}
        </>
    );
};

export default CourseCarousel;
