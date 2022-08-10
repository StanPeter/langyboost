import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import globalStyles from "styles/style.module.scss";

interface ResourcesPageProps {}

const ResourcesPage: React.FC<ResourcesPageProps> = ({}) => {
    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className="">ResourcesPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ResourcesPage;
