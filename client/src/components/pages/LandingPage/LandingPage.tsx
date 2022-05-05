import React, { FormEvent, useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import ParticleBackground from "components/ParticleBackground/ParticleBackground";
import { useHistory } from "react-router";
import styles from "./landingPage.module.scss";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const history = useHistory();

    useEffect(() => {
        console.log("effected");

        setTimeout(() => {
            setPassword("");
            setEmail("");
            setUsername("");
        }, 1000);
    }, []);

    const onClickHandler = () => {
        console.log("clicked");

        history.push("/courses");
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("clicked");
    };

    return (
        <div className={styles.landingPage}>
            <ParticleBackground />
            <div className={styles.signForm}>
                <div className={styles.slider}>
                    <FiArrowLeft className={styles.sliderArrow} />
                    <p>
                        The ultimate platfform for learning your desired
                        language.
                    </p>
                    <FiArrowRight className={styles.sliderArrow} />
                </div>
                <div className={styles.switcher}>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
                <form
                    className={styles.formSign}
                    autoComplete="off"
                    onSubmit={submitHandler}
                >
                    <input
                        className={styles.formInput}
                        type="email"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <input
                            id="username"
                            type="text"
                            style={{ display: "none" }}
                            name="fakeusernameremembered"
                        /> */}
                    <input
                        className={styles.formInput}
                        type="text"
                        name="username"
                        value={username}
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={styles.formInput}
                        type="password"
                        name="password"
                        // autoComplete="new-password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={onClickHandler}>Sign up</button>
                </form>
                <div className={styles.signUpText}>
                    <hr />
                    <p>Or sign up with</p>
                    <hr />
                </div>
                <div className={styles.formIcons}>
                    <FcGoogle className={styles.formIcon} />
                    <SiFacebook
                        style={{ color: "#45619d" }}
                        className={styles.formIcon}
                    />
                    {/* <img
                            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                            alt="facebookIcon"
                            className={Styles.formIcon}
                        /> */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
