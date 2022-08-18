import React from "react";
import Footer from "components/ui/Footer/Footer";
import Navbar from "components/ui/Navbar/Navbar";
import globalStyles from "styles/style.module.scss";

interface CourseDetailPageProps {}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({}) => {
    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className="CourseDetailPage">CourseDetailPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetailPage;
