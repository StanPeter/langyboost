import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface CardPageProps {}

const CardPage: React.FC<CardPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="CardPage">CardPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default CardPage;
