import Footer from "components/ui/Footer/Footer";
import Navbar from "components/ui/Navbar/Navbar";
import React, { FormEvent, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useHistory } from "react-router";
import globalStyles from "styles/style.module.scss";
import landingPageStyles from "components/pages/LandingPage/landingPage.module.scss";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = ({}) => {
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

    const buttonStyleLeft = {
        borderTopLeftRadius: "25px",
    };

    const buttonStyleRight = {
        borderTopRightRadius: "25px",
    };

    const switcherStyle = {
        margin: "0 0 1rem 0",
    };

    const onClickHandler = () => {
        console.log("clicked");

        history.push("/courses");
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("clicked");
    };

    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div>
                    <div
                        className={landingPageStyles.signForm}
                        style={{ margin: "0 auto" }}
                    >
                        <div
                            className={landingPageStyles.switcher}
                            style={switcherStyle}
                        >
                            <button style={buttonStyleLeft}>Sign in</button>
                            <button style={buttonStyleRight}>Sign up</button>
                        </div>
                        <form
                            className={landingPageStyles.formSign}
                            autoComplete="off"
                            onSubmit={submitHandler}
                        >
                            <input
                                className={landingPageStyles.formInput}
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
                                className={landingPageStyles.formInput}
                                type="text"
                                name="username"
                                value={username}
                                placeholder="username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className={landingPageStyles.formInput}
                                type="password"
                                name="password"
                                // autoComplete="new-password"
                                value={password}
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={onClickHandler}>Sign up</button>
                        </form>
                        <div className={landingPageStyles.signUpText}>
                            <hr />
                            <p>Or sign up with</p>
                            <hr />
                        </div>
                        <div className={landingPageStyles.formIcons}>
                            <FcGoogle className={landingPageStyles.formIcon} />
                            <SiFacebook
                                style={{ color: "#45619d" }}
                                className={landingPageStyles.formIcon}
                            />
                            {/* <img
                            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                            alt="facebookIcon"
                            className={landingPageStyles.formIcon}
                        /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AuthPage;
