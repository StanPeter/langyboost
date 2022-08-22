import React from "react";
import styles from "./cousesPage.module.scss";
import MainBody from "components/layouts/MainBody/MainBody";

interface CoursesPageProps {}

const CoursesPage: React.FC<CoursesPageProps> = () => {
    return (
        <MainBody>
            <div className={styles.coursesPage}>
                <h2>Courses</h2>
                <div className={styles.coursesFilters}>
                    <div className={styles.coursesFilter}>
                        <label htmlFor="">I speak</label>
                        <select name="sourceLanguage" id="" className={styles.coursesSelect}>
                            <option value="en">🇬🇧 &emsp; English</option>
                            <option value="ge">🇩🇪 &emsp; German</option>
                            <option value="jp">🇯🇵 &emsp; Japanese</option>
                        </select>
                    </div>
                    <div className={styles.coursesFilter}>
                        <label htmlFor="">Want to learn</label>
                        <select name="targetLanguage" id="" className={styles.coursesSelect}>
                            <option value="en">🇬🇧 &emsp; English</option>
                            <option value="ge">🇩🇪 &emsp; German</option>
                            <option value="jp">🇯🇵 &emsp; Japanese</option>
                        </select>
                    </div>
                    <div className={styles.coursesFilter}>
                        <label htmlFor="">Chosen course</label>
                        <select
                            name="chosenLanguage"
                            id=""
                            className={`${styles.coursesSelect} ${styles.coursesSelectThird}`}
                        >
                            <option value="en">🇬🇧 &emsp; English</option>
                            <option value="ge">🇩🇪 &emsp; German</option>
                            <option value="jp">🇯🇵 &emsp; Japanese</option>
                            {/* <option value="jp">German 2</option> */}
                        </select>
                        <div className={styles.coursesBtn}>
                            <button className={styles.coursesBtn}>Start now</button>
                        </div>
                    </div>
                </div>
                <hr className={styles.coursesSeparator} />
            </div>
        </MainBody>
    );
};

export default CoursesPage;
