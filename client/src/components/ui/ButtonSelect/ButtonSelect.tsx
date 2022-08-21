import React, { FormEvent } from "react";
import styles from "./buttonSelect.module.scss";
import Button from "../Button/Button";
import inputStyles from "components/ui/Input/input.module.scss";

interface ButtonSelectProps {
    title: string;
    type: "button" | "image";
    value: string; //title for the button or the image src name
    onClick?: Function;
    styleInput?: object;
}

const ButtonSelect: React.FC<ButtonSelectProps> = ({ value, title, type, onClick, styleInput }) => {
    const finalValue =
        type === "button" ? (
            <Button
                type="small"
                text={value}
                onClick={(e: FormEvent) => {
                    e.preventDefault();
                    if (onClick) onClick();
                }}
            />
        ) : (
            <div>
                <img alt="" src={value} />
            </div>
        );

    return (
        <div className={`${styles.wrapper}`}>
            <label className={inputStyles.formLabel} htmlFor="">
                {title}
            </label>
            <div className={`${styles.multiselectInput} ${styles.formType} ${styles.valueWrapper}`}>
                {finalValue}
            </div>
        </div>
    );
};

export default ButtonSelect;
