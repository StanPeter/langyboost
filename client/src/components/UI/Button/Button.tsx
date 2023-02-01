import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
    text: string;
    style?: object;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    active?: boolean | (() => boolean);
    disabled?: boolean | (() => boolean);
    useCase?: "big" | "small" | "middle" | "fullLine";
    className?: string;
    type?: "button" | "reset" | "submit";
}

const Button: React.FC<ButtonProps> = ({
    text,
    style,
    onClick = () => {},
    active,
    disabled,
    useCase,
    className,
    type = "button"
}) => {
    const isDisabled = typeof disabled === "function" ? disabled() : disabled ?? false;
    const isActive = () => {
        if (isDisabled) return false;
        else if (typeof active === "undefined" || (typeof active === "function" && active()) || active) return true;

        return false;
    };

    const buttonClasses = [styles.button];
    if (useCase) buttonClasses.push(styles[useCase]);
    if (isActive()) buttonClasses.push(styles.active);
    if (isDisabled) buttonClasses.push(styles.disabled);

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${buttonClasses.join(" ")} ${className}`}
            disabled={isDisabled}
            style={{ ...style }}
        >
            {text}
        </button>
    );
};

export default Button;
