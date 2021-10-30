import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface TermsConditionsPageProps {}

const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="termsConditionsPage">termsConditionsPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsConditionsPage;
