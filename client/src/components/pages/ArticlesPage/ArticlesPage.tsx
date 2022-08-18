import React from "react";
import Footer from "components/ui/Footer/Footer";
import Navbar from "components/ui/Navbar/Navbar";
import Multiselect from "components/ui/Multiselect/Multiselect";
import globalStyles from "styles/style.module.scss";
import styles from "./articlesPage.module.scss";

interface ArticlesPageProps {}

const data = [
    {
        text: "German",
        imgSrc: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png",
    },
    {
        text: "Armenian",
        imgSrc: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e6-1f1e9.png",
    },
    {
        text: "aloha",
    },
];

const ArticlesPage: React.FC<ArticlesPageProps> = ({}) => {
    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className={styles.coursesPage}>
                    <h2 className={globalStyles.header}>Articles</h2>
                    <div className={styles.coursesFilters}>
                        <Multiselect type="filter" data={data} title="Filter by language" />
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
            </div>
            <Footer />
        </div>
    );
};

export default ArticlesPage;
