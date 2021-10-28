import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

interface CoursesPageProps {}

const CoursesPage: React.FC<CoursesPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="courses-page">CoursesPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default CoursesPage;
