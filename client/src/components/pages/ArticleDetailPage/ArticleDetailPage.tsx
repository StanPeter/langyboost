import React from "react";
import Footer from "components/layouts/Footer/Footer";
import Navbar from "components/layouts/Navbar/Navbar";
import globalStyles from "styles/style.module.scss";

interface ArticleDetailPageProps {}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = () => {
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
