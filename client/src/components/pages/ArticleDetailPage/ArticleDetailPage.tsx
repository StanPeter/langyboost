import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import globalStyles from "styles/style.scss";

interface ArticleDetailPageProps {}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({}) => {
    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className="">ArticleDetailPage</div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticleDetailPage;
