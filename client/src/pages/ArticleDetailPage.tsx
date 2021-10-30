import React from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface ArticleDetailPageProps {}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({}) => {
    return (
        <div className="appWrapper">
            <Navbar />
            <div className="bodyWrapper">
                <div className="ArticleDetailPage">ArticleDetailPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticleDetailPage;
