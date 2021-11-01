import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
//@ts-ignore
import {
    IconFlagTR,
    IconFlagDE,
    IconFlagUS,
    IconFlagUK,
} from "material-ui-flags";

interface CoursesPageProps {}

const CoursesPage: React.FC<CoursesPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="courses-page">
                    <h2 className="header">Courses</h2>
                    <div className="courses-filters">
                        {/* <IconButton>
                            <IconFlagTR />
                        </IconButton>
                        <IconButton>
                            <IconFlagDE />
                        </IconButton>
                        <IconButton>
                            <IconFlagUK />
                        </IconButton> */}
                        <div className="courses-filter">
                            <label htmlFor="">I speak</label>
                            <select
                                name="sourceLanguage"
                                id=""
                                className="courses-select"
                            >
                                <option value="en">🇬🇧 &emsp; English</option>
                                <option value="ge">🇩🇪 &emsp; German</option>
                                <option value="jp">🇯🇵 &emsp; Japanese</option>
                                {/* <option value="jp">German 2</option> */}
                            </select>
                        </div>
                        <div className="courses-filter">
                            <label htmlFor="">Want to learn</label>
                            <select
                                name="targetLanguage"
                                id=""
                                className="courses-select"
                            >
                                <option value="en">🇬🇧 &emsp; English</option>
                                <option value="ge">🇩🇪 &emsp; German</option>
                                <option value="jp">🇯🇵 &emsp; Japanese</option>
                                {/* <option value="jp">German 2</option> */}
                            </select>
                        </div>
                        <div className="courses-filter">
                            <label htmlFor="">Chosen course</label>
                            <select
                                name="chosenLanguage"
                                id=""
                                className="courses-select courses-select-third"
                            >
                                <option value="en">🇬🇧 &emsp; English</option>
                                <option value="ge">🇩🇪 &emsp; German</option>
                                <option value="jp">🇯🇵 &emsp; Japanese</option>
                                {/* <option value="jp">German 2</option> */}
                            </select>
                            <div className="courses-btn">
                                <button className="courses-btn">
                                    Start now
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="courses-separator" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoursesPage;
