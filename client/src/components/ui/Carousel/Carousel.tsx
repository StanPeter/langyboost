import React, { Dispatch, SetStateAction, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Course } from "utils/interfaces";
import { Direction } from "utils/types";
import styles from "./carousel.module.scss";
import GeFlagImg from "images/flags/ge.png";
import GrFlagImg from "images/flags/gr.png";
import EnFlagImg from "images/flags/en.png";
import FrFlagImg from "images/flags/fr.png";
import ItFlagImg from "images/flags/it.png";
import EsFlagImg from "images/flags/es.png";
import RuFlagImg from "images/flags/ru.png";
import PtFlagImg from "images/flags/pt.png";

const EMPTY_COURSES = [
    { value: "en", imgSrc: EnFlagImg, cardIndex: 0 },
    { value: "eS", imgSrc: EsFlagImg, cardIndex: 0 },
    { value: "fr", imgSrc: FrFlagImg, cardIndex: 0 },
    { value: "ge", imgSrc: GeFlagImg, cardIndex: 0 },
    { value: "gr", imgSrc: GrFlagImg, cardIndex: 0 },
    { value: "it", imgSrc: ItFlagImg, cardIndex: 0 },
    { value: "ru", imgSrc: RuFlagImg, cardIndex: 0 },
    { value: "pt", imgSrc: PtFlagImg, cardIndex: 0 },
];

interface CarouselProps {
    courses: Course[];
    setCourses: Dispatch<SetStateAction<Course[]>>;
}

const Carousel: React.FC<CarouselProps> = ({ courses, setCourses }) => {
    /* HOOKS */
    const [animate, setAnimate] = useState(false);
    const [coursesHelper, setCoursesHelper] = useState<Course[]>([]);

    /* HANDLERS */
    const getImgSrc = (cardIndex: number): string => {
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].cardIndex === cardIndex) return courses[i].imgSrc;
        }

        alert("SHOUDNT GO HERE");
        return "";
    };

    const getItemIndex = (mainIdx: number, step: 1 | 2, direction: Direction) => {
        const lastIndex = courses.length - 1;
        const firstIndex = 0;

        let result = direction === "left" ? mainIdx - step : mainIdx + step;

        //for direction left, if it overflows then set to one of two last items, same for opposite direction
        if (result < firstIndex) result = result === -1 ? lastIndex : lastIndex - 1;
        else if (result > lastIndex)
            result = result === lastIndex + 1 ? firstIndex : firstIndex + 1;

        return result;
    };

    const onSwitchHandler = (direction?: Direction | null, clickedIdx?: number) => {
        //for arrow handling there is direction filled, for click handling there is index clicked number
        if (!direction && !clickedIdx) {
            console.log("NOT FILLED PARAMS FOR THE FUNCTION");
            return;
        }

        let chosenIndex;

        if (direction) {
            chosenIndex = getItemIndex(
                courses.findIndex((course: Course) => course.cardIndex === 3),
                1,
                direction
            );
        }

        if (clickedIdx) {
            chosenIndex = courses.findIndex((course: Course) => course.cardIndex === clickedIdx);
        }

        //@ts-ignore
        setNewCourses(chosenIndex);
    };

    const setNewCourses = async (chosenIndex: number) => {
        if (animate) return;

        const newCourses = [...EMPTY_COURSES];

        newCourses[getItemIndex(chosenIndex, 2, "left")].cardIndex = 1;
        newCourses[getItemIndex(chosenIndex, 1, "left")].cardIndex = 2;
        newCourses[chosenIndex].cardIndex = 3;
        newCourses[getItemIndex(chosenIndex, 1, "right")].cardIndex = 4;
        newCourses[getItemIndex(chosenIndex, 2, "right")].cardIndex = 5;

        setAnimate(true);
        // setChosenCourseValue(newCourses[chosenIndex].value);
        setCoursesHelper(newCourses);
    };

    return (
        <div className={styles.courseWrapper}>
            <FiArrowLeft onClick={() => onSwitchHandler("left")} className={styles.sliderArrow} />
            {[1, 2, 3, 4, 5].map((idx) => (
                <div
                    onAnimationEnd={() => {
                        setAnimate(false);
                        setCourses(coursesHelper);
                    }}
                    className={`${styles.course} ${animate ? styles.animate : ""}`}
                    key={idx}
                    onClick={() => onSwitchHandler(null, idx)}
                >
                    <img src={getImgSrc(idx)} alt="flag" />
                </div>
            ))}
            <FiArrowRight onClick={() => onSwitchHandler("right")} className={styles.sliderArrow} />
        </div>
    );
};

export default Carousel;
