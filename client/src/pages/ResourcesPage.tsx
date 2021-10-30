import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface ResourcesPageProps {}

const ResourcesPage: React.FC<ResourcesPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="ResourcesPage">ResourcesPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ResourcesPage;
