import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/UI/Button/Button";
import Header from "components/UI/Header/Header";
import Input from "components/UI/Input/Input";
import Paragraph from "components/UI/Paragraph";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router";
import { SING_IN_SCHEMA, SING_UP_SCHEMA } from "settings/validationMapping";
import globalClasses from "styles/globalClasses.module.scss";
import { TLoginFormMode, TLoginFormUseCase } from "ts/types";
import styles from "./loginForm.module.scss";

interface IFormData {
    password?: string;
    username?: string;
    email?: string;
    confirmPassword?: string;
}

interface ILoginFormProps {
    useCase: TLoginFormUseCase;
}

// form has two modes, sing in and sign up
const LoginForm: React.FC<ILoginFormProps> = ({ useCase }) => {
    const [mode, setMode] = useState<TLoginFormMode>("singIn");
    const navigate = useNavigate();

    // form handling library react-hook-form with yup validation
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ resolver: yupResolver(mode === "singIn" ? SING_IN_SCHEMA : SING_UP_SCHEMA) });

    const onSubmitHandler: SubmitHandler<IFormData> = data => {
        // e.preventDefault();

        console.log(data, "clicked");

        console.log(errors.hello, " errors");

        navigate("/courses");
    };

    return (
        <div className={styles.signForm}>
            {useCase === "landingPage" && (
                <div className={styles.slider}>
                    <FiArrowLeft className={styles.sliderArrow} />
                    <Header level={2} whiteText text="ULTIMATE_PLATTFORM_TEXT" />
                    <FiArrowRight className={styles.sliderArrow} />
                </div>
            )}
            <div className={styles.switcherWrapper}>
                <Button
                    useCase="fullLine"
                    active={mode === "singIn"}
                    text="SIGN_IN"
                    classes={`${styles.btn} ${styles.btnLeft} ${
                        useCase === "authPage" ? styles.authPage : styles.landingPage
                    }`}
                    onClick={() => setMode("singIn")}
                />
                <Button
                    useCase="fullLine"
                    classes={`${styles.btn} ${styles.btnRight} ${
                        useCase === "authPage" ? styles.authPage : styles.landingPage
                    }`}
                    active={mode === "signUp"}
                    text="SIGN_UP"
                    onClick={() => setMode("signUp")}
                />
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
                {mode === "signUp" && (
                    <Input
                        withoutLabel
                        type="text"
                        register={register("email")}
                        placeholder="email"
                        validationMessage={errors.email?.message?.toString()}
                    />
                )}
                <Input
                    withoutLabel
                    validationMessage={errors.username?.message?.toString()}
                    type="text"
                    register={register("username")}
                    placeholder="username"
                />
                <Input
                    withoutLabel
                    type="password"
                    validationMessage={errors.password?.message?.toString()}
                    register={register("password")}
                    placeholder="password"
                />
                {mode === "signUp" && (
                    <Input
                        withoutLabel
                        type="password"
                        validationMessage={errors.confirmPassword?.message?.toString()}
                        register={register("confirmPassword")}
                        placeholder="confirmPassword"
                    />
                )}
                <Button
                    text={mode === "singIn" ? "SIGN_IN" : "SIGN_UP"}
                    useCase="fullLine"
                    type="submit"
                    classes={styles.submitBtn}
                />
            </form>
            <div className={styles.signUpText}>
                <hr />
                <Paragraph text={mode === "singIn" ? "OR_SIGN_IN" : "OR_SIGN_UP"} />
                <hr />
            </div>
            <div className={styles.formIcons}>
                <FcGoogle className={globalClasses.iconSpin} />
                <SiFacebook className={`${globalClasses.facebook} ${globalClasses.iconSpin}`} />
            </div>
        </div>
    );
};

export default LoginForm;
