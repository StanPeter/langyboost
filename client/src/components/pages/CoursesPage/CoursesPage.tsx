import React, { useEffect, useState } from "react";
import styles from "./cousesPage.module.scss";
import MainBody from "components/layouts/MainBody/MainBody";
import InputSwitcher from "components/ui/InputSwitcher";
import GeFlagImg from "images/flags/ge.png";
import GrFlagImg from "images/flags/gr.png";
import EnFlagImg from "images/flags/en.png";
import FrFlagImg from "images/flags/fr.png";
import ItFlagImg from "images/flags/it.png";
import EsFlagImg from "images/flags/es.png";
import RuFlagImg from "images/flags/ru.png";
import PtFlagImg from "images/flags/pt.png";
import Button from "components/ui/Button/Button";
import globalStyles from "styles/style.module.scss";
import { MEDIA_SCREENS } from "utils/appParameters";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface CoursesPageProps {}

type Direction = "left" | "right";

//cardIndex 0 means course is not displayed, then the rest goes from left 1 2 3(middle one) 4 5
const INIT_COURSES = [
    { value: "en", imgSrc: EnFlagImg, cardIndex: 1 },
    { value: "eS", imgSrc: EsFlagImg, cardIndex: 2 },
    { value: "fr", imgSrc: FrFlagImg, cardIndex: 3 },
    { value: "ge", imgSrc: GeFlagImg, cardIndex: 4 },
    { value: "gr", imgSrc: GrFlagImg, cardIndex: 5 },
    { value: "it", imgSrc: ItFlagImg, cardIndex: 0 },
    { value: "ru", imgSrc: RuFlagImg, cardIndex: 0 },
    { value: "pt", imgSrc: PtFlagImg, cardIndex: 0 },
];

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

const CoursesPage: React.FC<CoursesPageProps> = () => {
    const [iSpeak, setISpeak] = useState<string[] | null>(["en"]);
    const [wantToLearn, setWantToLearn] = useState<string[] | null>(null);
    const [chosenCourse, setChosenCourse] = useState<string[] | null>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [animate, setAnimate] = useState(false);
    const [courses, setCourses] = useState(INIT_COURSES);
    const [coursesHelper, setCoursesHelper] = useState(INIT_COURSES);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const btnDisabled = () => (iSpeak && wantToLearn && chosenCourse ? false : true);

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

    //
    const onSwitchHandler = (direction?: Direction | null, clickedIdx?: number) => {
        //for arrow handling there is direction filled, for click handling there is index clicked number
        if (!direction && !clickedIdx) {
            console.log("NOT FILLED PARAMS FOR THE FUNCTION");
            return;
        }

        let chosenIndex;

        if (direction) {
            chosenIndex = getItemIndex(
                courses.findIndex((course) => course.cardIndex === 3),
                1,
                direction
            );
        }

        if (clickedIdx) {
            chosenIndex = courses.findIndex((course) => course.cardIndex === clickedIdx);
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
        setCoursesHelper(newCourses);
    };

    console.log("rerendering");

    return (
        <MainBody>
            <h2 style={{ marginBottom: "2rem" }}>Courses</h2>
            <div className={styles.wrapper}>
                <div className={styles.filtersWrapper}>
                    <InputSwitcher
                        name="I speak"
                        type="singleselect"
                        useCase="filter"
                        dataOfMultiselect={[
                            { text: "English", value: "en", imgSrc: EnFlagImg },
                            { text: "German", value: "ge", imgSrc: GeFlagImg },
                        ]}
                        value={iSpeak}
                        onChange={(val) => setISpeak(val)}
                    />
                    <InputSwitcher
                        name="Want to learn"
                        type="singleselect"
                        useCase="filter"
                        dataOfMultiselect={[
                            { text: "English", value: "en", imgSrc: EnFlagImg },
                            { text: "German", value: "ge", imgSrc: GeFlagImg },
                        ]}
                        value={wantToLearn}
                        onChange={(val) => setWantToLearn(val)}
                    />
                    <InputSwitcher
                        name="Chosen course"
                        type="singleselect"
                        useCase="filter"
                        dataOfMultiselect={[
                            { text: "English", value: "en", imgSrc: EnFlagImg },
                            { text: "German", value: "ge", imgSrc: GeFlagImg },
                        ]}
                        value={chosenCourse}
                        onChange={(val) => setChosenCourse(val)}
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <Button
                        disabled={btnDisabled}
                        type="small"
                        text="Start now"
                        onClick={() => {}}
                    />
                </div>
            </div>
            {windowWidth < MEDIA_SCREENS.tablet && (
                <Button disabled={btnDisabled} type="middle" text="Start now" onClick={() => {}} />
            )}
            <hr className={globalStyles.separator} />
            <h2 style={{ margin: "2rem 0" }}>Supported Courses</h2>
            <div className={styles.courseWrapper}>
                <FiArrowLeft
                    onClick={() => onSwitchHandler("left")}
                    className={styles.sliderArrow}
                />
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
                <FiArrowRight
                    onClick={() => onSwitchHandler("right")}
                    className={styles.sliderArrow}
                />
            </div>
        </MainBody>
    );
};

export default CoursesPage;
