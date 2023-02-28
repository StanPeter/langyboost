import Footer from "components/layouts/Footer/Footer";
import Navbar from "components/layouts/Navbar/Navbar";
import React from "react";
import styles from "./mainBody.module.scss";

interface MainBodyProps {
    children: React.ReactNode;
}

const MainBody: React.FC<MainBodyProps> = ({ children }) => {
    return (
        <div className={styles.appWrapper}>
            <Navbar />
            <main className={styles.bodyWrapper}>{children}</main>
            <Footer />
        </div>
    );
};

export default MainBody;
