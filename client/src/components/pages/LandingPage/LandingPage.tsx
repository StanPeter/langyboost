import LoginForm from "components/others/LoginForm/LoginForm";
import ParticleBackground from "components/others/ParticleBackground/ParticleBackground";
import React from "react";
import { ELoginFormUsecase } from "ts/enums";
import mainBodyStyles from "../../layouts/MainBody/mainBody.module.scss";
import styles from "./landingPage.module.scss";

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
                <LoginForm useCase={ELoginFormUsecase.LANGING_PAGE} />
            </div>
        </div>
    );
};

export default LandingPage;
