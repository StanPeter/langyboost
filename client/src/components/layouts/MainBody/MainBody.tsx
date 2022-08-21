import React from "react";
import Footer from "components/layouts/Footer/Footer";
import Navbar from "components/layouts/Navbar/Navbar";
import styles from "./mainBody.module.scss";

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = ({ children }) => {
    return (
        <div className={styles.appWrapper}>
            <Navbar />
            <div className={styles.bodyWrapper}>{children}</div>
            <Footer />
        </div>
    );
};

export default MainBody;
