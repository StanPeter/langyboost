import React from "react";
import Select from "components/ui/Select/Select";
import styles from "./articlesPage.module.scss";
import MainBody from "components/layouts/MainBody/MainBody";

interface ArticlesPageProps {}

const data = [
    {
        text: "German",
        imgSrc: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png",
        value: "german",
    },
    {
        text: "Armenian",
        imgSrc: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e6-1f1e9.png",
        value: "armenian",
    },
    {
        text: "aloha",
        value: "aloha",
    },
];

const ArticlesPage: React.FC<ArticlesPageProps> = () => {
    return (
        <MainBody>
            <div className={styles.coursesPage}>
                <h2>Articles</h2>
                <div className={styles.coursesFilters}>
                    <Select
                        type="multiselect"
                        useCase="filter"
                        data={data}
                        title="Filter by language"
                        value={["german"]}
                        onChange={() => {}}
                    />
                    <div className={styles.coursesFilter}>
                        <label htmlFor="">Sort by</label>
                        <select name="sourceLanguage" id="" className={styles.coursesSelect}>
                            <option value="en">Newest</option>
                            <option value="ge">Most popular</option>
                            <option value="ge">Most viewed</option>
                        </select>
                    </div>
                </div>
                <hr className={styles.coursesSeparator} />
            </div>
        </MainBody>
    );
};

export default ArticlesPage;
