import MainBody from "components/layouts/MainBody/MainBody";
import Button from "components/UI/Button/Button";
import Carousel from "components/UI/Carousel/Carousel";
import Select from "components/UI/Select/Select";
import React, { useEffect, useState } from "react";
import { betaCourses, customCourses, mainCourses } from "settings/mockData";
import globalClasses from "styles/globalClasses.module.scss";
import styles from "./cousesPage.module.scss";

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
                    <Select
                        text="I_SPEAK"
                        type="singleselect"
                        useCase="filter"
                        data={mainCourses}
                        value={[iSpeak]}
                        onChange={val => setISpeak(val)}
                    />
                    <Select
                        text="WANT_TO_LEARN"
                        type="singleselect"
                        useCase="filter"
                        data={mainCourses}
                        value={[wantToLearn]}
                        onChange={val => setWantToLearn(val)}
                    />
                    <Select
                        text="CHOSEN_COURSE"
                        type="singleselect"
                        useCase="filter"
                        data={mainCourses}
                        value={[chosenCourse]}
                        onChange={val => setChosenCourse(val)}
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <Button disabled={btnDisabled} useCase="small" text="START_NOW" onClick={() => {}} />
                </div>
            </div>
            {windowWidth < 400 && (
                <Button disabled={btnDisabled} useCase="middle" text="START_NOW" onClick={() => {}} />
            )}
            <hr className={globalClasses.separator} />
            <h2 style={{ margin: "2rem 0" }}>Supported Courses</h2>
            <Carousel data={mainCourses} value={chosenCourse} onChange={setChosenCourse} />
            <hr className={globalClasses.separator} />
            <h2 style={{ margin: "2rem 0" }}>Custom German Courses</h2>
            <Carousel data={customCourses} value={chosenCourse} onChange={setChosenCourse} />
            <hr className={globalClasses.separator} />
            <h2 style={{ margin: "2rem 0" }}>Beta Courses</h2>
            <Carousel data={betaCourses} value={chosenCourse} onChange={setChosenCourse} />
            <hr className={globalClasses.separator} />
            <Button text="Start learning!" useCase="big" onClick={() => {}} />
        </MainBody>
    );
};

export default CoursesPage;
