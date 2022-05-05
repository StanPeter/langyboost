import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import globalStyles from "styles/style.scss";

interface ResourceDetailPageProps {}

const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({}) => {
    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className="">ResourceDetailPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ResourceDetailPage;
