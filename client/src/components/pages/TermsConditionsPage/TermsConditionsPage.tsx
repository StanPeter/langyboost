import React from "react";
import Footer from "components/ui/Footer/Footer";
import Navbar from "components/ui/Navbar/Navbar";
import globalStyles from "styles/style.module.scss";

interface TermsConditionsPageProps {}

const TermsConditionsPage: React.FC<TermsConditionsPageProps> = () => {
    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className="">termsConditionsPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsConditionsPage;
