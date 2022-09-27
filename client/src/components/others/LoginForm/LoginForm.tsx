import Button from "components/UI/Button/Button";
import Input from "components/UI/Input/Input";
import React, { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router";
import styles from "./loginForm.module.scss";

interface LoginFormProps {
    useCase: "authPage" | "landingPage";
}

const LoginForm: React.FC<LoginFormProps> = ({ useCase }) => {
    const [mode, setMode] = useState<"signUp" | "signIn">("signIn");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("effected");

    //     setTimeout(() => {
    //         setPassword("");
    //         setEmail("");
    //         setUsername("");
    //     }, 1000);
    // }, []);

    const buttonStyleLeft = {
        borderTopLeftRadius: useCase === "authPage" ? "1.8rem" : undefined,
        width: "50%",
        height: useCase === "landingPage" ? "58px" : undefined
    };

    const buttonStyleRight = {
        borderTopRightRadius: useCase === "authPage" ? "1.8rem" : undefined,
        width: "50%",
        height: useCase === "landingPage" ? "58px" : undefined
    };

    const onClickHandler = () => {
        console.log("clicked");

        navigate("/courses");
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("clicked");
    };

    const signFormStyles = {
        // width: "70%",
        // marginTop: useCase === "landingPage" ? 0 : "26%",
    };

    return (
        <div className={styles.signForm} style={signFormStyles}>
            {useCase === "landingPage" && (
                <div className={styles.slider}>
                    <FiArrowLeft className={styles.sliderArrow} />
                    <p>The ultimate platfform for learning your desired language.</p>
                    <FiArrowRight className={styles.sliderArrow} />
                </div>
            )}
            <div
                style={{ marginTop: useCase === "landingPage" ? "1rem" : undefined }}
                className={styles.switcherWrapper}
            >
                <Button
                    type="fullLine"
                    style={buttonStyleLeft}
                    active={mode === "signIn"}
                    text="Sign in"
                    onClick={() => setMode("signIn")}
                />
                <Button
                    type="fullLine"
                    style={buttonStyleRight}
                    active={mode === "signUp"}
                    text="Sign up"
                    onClick={() => setMode("signUp")}
                />
            </div>
            <form autoComplete="off" onSubmit={submitHandler}>
                {mode === "signUp" && (
                    <Input
                        withoutLabel
                        type="email"
                        name="email"
                        // value={email}
                        placeholder="email"
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                )}
                <Input
                    withoutLabel
                    type="text"
                    name="username"
                    // value={username}
                    placeholder="username"
                    // onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    withoutLabel
                    type="password"
                    name="password"
                    // value={password}
                    placeholder="password"
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    onClick={onClickHandler}
                    text={mode === "signIn" ? "Sign in" : "Sign up"}
                    type="fullLine"
                    style={{ fontSize: "1.4rem", height: "58px", width: "100%" }}
                />
            </form>
            <div className={styles.signUpText}>
                <hr />
                <p>Or sign {mode === "signIn" ? "in" : "up"} with</p>
                <hr />
            </div>
            <div className={styles.formIcons}>
                <FcGoogle className={styles.formIcon} />
                <SiFacebook style={{ color: "#45619d" }} className={styles.formIcon} />
            </div>
        </div>
    );
};

export default LoginForm;
