import React, { FormEvent } from "react";
import styles from "./buttonSelect.module.scss";
import multiselectStyles from "../Multiselect/multiselect.module.scss";
import Button from "../Button/Button";

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
                style={{
                    backgroundColor: "rgb(65, 179, 163)",
                    color: "rgb(250, 251, 255)",
                    fontSize: "16px",
                    width: "145px",
                    height: "28px",
                    border: "1px solid #85CDCA",
                    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "inherit",
                    justifyContent: "center",
                    margin: 0,
                    ...styleInput,
                }}
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
        <div className={`${multiselectStyles.multiselectWrapper}`}>
            <label className={multiselectStyles.formType} htmlFor="">
                {title}
            </label>
            <div
                className={`${multiselectStyles.multiselectInput} ${multiselectStyles.formType} ${styles.valueWrapper}`}
            >
                {finalValue}
            </div>
        </div>
    );
};

export default ButtonSelect;
