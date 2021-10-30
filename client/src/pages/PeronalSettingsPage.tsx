import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface PeronalSettingsPageProps {}

const PeronalSettingsPage: React.FC<PeronalSettingsPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="PeronalSettingsPage">PeronalSettingsPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default PeronalSettingsPage;
