import React, { useEffect, useState } from "react";
import styles from "./cousesPage.module.scss";
import MainBody from "components/layouts/MainBody/MainBody";
import InputSwitcher from "components/ui/InputSwitcher";
import GeFlagImg from "images/flags/ge.png";
import GrFlagImg from "images/flags/gr.png";
import EnFlagImg from "images/flags/en.png";
import FrFlagImg from "images/flags/fr.png";
import EsFlagImg from "images/flags/es.png";
import Button from "components/ui/Button/Button";
import globalStyles from "styles/style.module.scss";
import { MEDIA_SCREENS } from "utils/appParameters";
import Carousel from "components/ui/Carousel/Carousel";

interface CoursesPageProps {}

//cardIndex 0 means course is not displayed, then the rest goes from left 1 2 3(middle one) 4 5
const INIT_COURSES = [
    { value: "en", imgSrc: EnFlagImg, cardIndex: 1 },
    { value: "eS", imgSrc: EsFlagImg, cardIndex: 2 },
    { value: "fr", imgSrc: FrFlagImg, cardIndex: 3 },
    { value: "ge", imgSrc: GeFlagImg, cardIndex: 4 },
    { value: "gr", imgSrc: GrFlagImg, cardIndex: 5 },
];

const CoursesPage: React.FC<CoursesPageProps> = () => {
    /* HOOKS */
    const [iSpeak, setISpeak] = useState<string[] | null>(["en"]);
    const [wantToLearn, setWantToLearn] = useState<string[] | null>(null);
    const [chosenCourse, setChosenCourse] = useState<string[] | null>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [courses, setCourses] = useState(INIT_COURSES);
    const [chosenCourseValue, setChosenCourseValue] = useState("fr");

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
            <Carousel courses={courses} setCourses={setCourses} />
            <hr className={globalStyles.separator} />
            <h2 style={{ margin: "2rem 0" }}>Custom German Courses</h2>
            <Carousel courses={courses} setCourses={setCourses} />
            <hr className={globalStyles.separator} />
            <h2 style={{ margin: "2rem 0" }}>Beta Courses</h2>
            <Carousel courses={courses} setCourses={setCourses} />
            <hr className={globalStyles.separator} />
            <Button text="Start learning!" type="big" onClick={() => {}} />
        </MainBody>
    );
};

export default CoursesPage;
