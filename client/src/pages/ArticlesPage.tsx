import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Multiselect from "components/Multiselect";

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
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="courses-page">
                    <h2 className="header">Articles</h2>
                    <div className="courses-filters">
                        <Multiselect data={data} />
                        <div className="courses-filter">
                            <label htmlFor="">Sort by</label>
                            <select
                                name="sourceLanguage"
                                id=""
                                className="courses-select"
                            >
                                <option value="en">Newest</option>
                                <option value="ge">Most popular</option>
                                <option value="ge">Most viewed</option>
                            </select>
                        </div>
                    </div>
                    <hr className="courses-separator" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticlesPage;
