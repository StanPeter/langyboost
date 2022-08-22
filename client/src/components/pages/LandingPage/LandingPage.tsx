import React from "react";
import ParticleBackground from "components/others/ParticleBackground/ParticleBackground";
import styles from "./landingPage.module.scss";
import LoginForm from "components/others/LoginForm/LoginForm";
import mainBodyStyles from "../../layouts/MainBody/mainBody.module.scss";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
    // useEffect(() => {
    //     console.log("effected");

    //     setTimeout(() => {
    //         // setPassword("");
    //         // setEmail("");
    //         // setUsername("");
    //     }, 1000);
    // }, []);

    console.log("rerendering");

    return (
        <div className={styles.landingPage}>
            <ParticleBackground />
            <div className={mainBodyStyles.bodyWrapper}>
                <LoginForm useCase="landingPage" />
            </div>
        </div>
    );
};

export default LandingPage;
