import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface ResourceDetailPageProps {}

const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="ResourceDetailPage">ResourceDetailPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ResourceDetailPage;
