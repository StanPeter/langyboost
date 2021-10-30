import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface ArticlesPageProps {}

const ArticlesPage: React.FC<ArticlesPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="ArticlesPage">ArticlesPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticlesPage;
