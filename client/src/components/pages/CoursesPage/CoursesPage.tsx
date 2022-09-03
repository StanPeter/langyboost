import React, { useEffect, useState } from "react";
import styles from "./cousesPage.module.scss";
import MainBody from "components/layouts/MainBody/MainBody";
import InputSwitcher from "components/ui/InputSwitcher";
import Button from "components/ui/Button/Button";
import globalStyles from "styles/style.module.scss";
import { MEDIA_SCREENS } from "utils/appParameters";
import Carousel from "components/ui/Carousel/Carousel";
import { betaCourses, customCourses, mainCourses } from "utils/mockData";

interface CoursesPageProps {}

const CoursesPage: React.FC<CoursesPageProps> = () => {
    /* HOOKS */
    const [iSpeak, setISpeak] = useState<string>("");
    const [wantToLearn, setWantToLearn] = useState<string>("");
    const [chosenCourse, setChosenCourse] = useState<string>("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
                        dataOfMultiselect={mainCourses}
                        value={iSpeak}
                        onChange={(val) => setISpeak(val)}
                    />
                    <InputSwitcher
                        name="Want to learn"
                        type="singleselect"
                        useCase="filter"
                        dataOfMultiselect={mainCourses}
                        value={wantToLearn}
                        onChange={(val) => setWantToLearn(val)}
                    />
                    <InputSwitcher
                        name="Chosen course"
                        type="singleselect"
                        useCase="filter"
                        dataOfMultiselect={mainCourses}
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
            <Carousel
                data={mainCourses}
                value={chosenCourse}
                onChange={setChosenCourse}
            />
            <hr className={globalStyles.separator} />
            <h2 style={{ margin: "2rem 0" }}>Custom German Courses</h2>
            <Carousel
                data={customCourses}
                value={chosenCourse}
                onChange={setChosenCourse}
            />
            <hr className={globalStyles.separator} />
            <h2 style={{ margin: "2rem 0" }}>Beta Courses</h2>
            <Carousel
                data={betaCourses}
                value={chosenCourse}
                onChange={setChosenCourse}
            />
            <hr className={globalStyles.separator} />
            <Button text="Start learning!" type="big" onClick={() => {}} />
        </MainBody>
    );
};

export default CoursesPage;
