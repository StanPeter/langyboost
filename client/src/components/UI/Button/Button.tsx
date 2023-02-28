import TranslateText from "components/hoc/TranslateText";
import React from "react";
import { TButtonUseCase } from "ts/types";
import styles from "./button.module.scss";

interface ButtonProps {
    text: string;
    style?: object;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    active?: boolean | (() => boolean);
    disabled?: boolean | (() => boolean);
    useCase?: TButtonUseCase;
    classes?: string;
    type?: "button" | "reset" | "submit";
}

const Button: React.FC<ButtonProps> = ({
    text,
    style,
    onClick = () => {},
    active,
    disabled,
    useCase,
    classes,
    type = "button"
}) => {
    const isDisabled = typeof disabled === "function" ? disabled() : disabled ?? false;
    const isActive = () => {
        if (isDisabled) return false;
        else if (typeof active === "undefined" || (typeof active === "function" && active()) || active) return true;

        return false;
    };

    // add styiling classes
    const buttonClasses = [styles.button];
    if (useCase) buttonClasses.push(styles[useCase]);
    if (isActive()) buttonClasses.push(styles.active);
    if (isDisabled) buttonClasses.push(styles.disabled);

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${buttonClasses.join(" ")} ${classes}`}
            disabled={isDisabled}
            style={{ ...style }}
        >
            <TranslateText>{text}</TranslateText>
        </button>
    );
};

export default Button;
