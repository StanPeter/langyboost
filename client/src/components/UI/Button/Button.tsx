import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    text: string;
    style?: object;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    active?: boolean | (() => boolean);
    disabled?: boolean | (() => boolean);
    type?: "big" | "small" | "middle" | "fullLine";
}

const Button: React.FC<ButtonProps> = ({ text, style, onClick, active, disabled, type }) => {
    const isDisabled = typeof disabled === "function" ? disabled() : disabled ?? false;
    const isActive = () => {
        if (isDisabled) return false;
        else if (typeof active === "undefined" || (typeof active === "function" && active()) || active) return true;

        return false;
    };

    const buttonClasses = [styles.button];
    if (type) buttonClasses.push(styles[type]);
    if (isActive()) buttonClasses.push(styles.active);
    if (isDisabled) buttonClasses.push(styles.disabled);

    return (
        <button onClick={onClick} className={buttonClasses.join(" ")} disabled={isDisabled} style={{ ...style }}>
            {text}
        </button>
    );
};

export default Button;
