import React from "react";
import styles from "./inputWrapper.module.scss";

interface IInputWrapper {
    children: React.ReactNode;
    validationMessage?: string;
}

const InputWrapper: React.FC<IInputWrapper> = ({ children, validationMessage }) => {
    return (
        <div className={styles.wrapper}>
            {children}
            {validationMessage ? <p className={styles.validationMessage}>{validationMessage}</p> : null}
        </div>
    );
};

export default InputWrapper;
