import React from "react";
import ParticleBackground from "components/others/ParticleBackground/ParticleBackground";
import styles from "./landingPage.module.scss";
import LoginForm from "components/others/LoginForm/LoginForm";

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
            <LoginForm useCase="landingPage" />
        </div>
    );
};

export default LandingPage;
