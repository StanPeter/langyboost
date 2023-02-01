import Button from "components/UI/Button/Button";
import Input from "components/UI/Input/Input";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router";
import styles from "./loginForm.module.scss";

interface IFormData {
    hello?: string;
}

interface LoginFormProps {
    useCase: "authPage" | "landingPage";
}

const LoginForm: React.FC<LoginFormProps> = ({ useCase }) => {
    const [mode, setMode] = useState<"signUp" | "signIn">("signIn");
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("effected");

    //     setTimeout(() => {
    //         setPassword("");
    //         setEmail("");
    //         setUsername("");
    //     }, 1000);
    // }, []);

    const onSubmitHandler: SubmitHandler<IFormData> = data => {
        // e.preventDefault();

        console.log(data, "clicked");

        console.log(errors.hello, " errors");

        // navigate("/courses");
    };

    const signFormStyles = {
        // width: "70%",
        // marginTop: useCase === "landingPage" ? 0 : "26%",
    };

    console.log("rerender");
    // console.log(watch("hello"));
    console.log(errors.hello, " errors");

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
                    useCase="fullLine"
                    active={mode === "signIn"}
                    text="Sign in"
                    className={`${styles.btn} ${styles.btnLeft} ${
                        useCase === "authPage" ? styles.authPage : styles.landingPage
                    }`}
                    onClick={() => setMode("signIn")}
                />
                <Button
                    useCase="fullLine"
                    className={`${styles.btn} ${styles.btnRight} ${
                        useCase === "authPage" ? styles.authPage : styles.landingPage
                    }`}
                    active={mode === "signUp"}
                    text="Sign up"
                    onClick={() => setMode("signUp")}
                />
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
                {/* {mode === "signUp" && (
                    <Input
                        withoutLabel
                        type="email"
                        name="email"
                        register={register("email", { maxLength: 5, required: true })}
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
                /> */}
                <input type={"text"} {...register("hello", { maxLength: 5 })} />
                <Input
                    withoutLabel
                    type="password"
                    name="password"
                    // value={password}
                    register={() => register("password")}
                    placeholder="password"
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">click</button>
                <Button
                    text={mode === "signIn" ? "Sign in" : "Sign up"}
                    useCase="fullLine"
                    type="submit"
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
