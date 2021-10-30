import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface CourseDetailPageProps {}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="CourseDetailPage">CourseDetailPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetailPage;
