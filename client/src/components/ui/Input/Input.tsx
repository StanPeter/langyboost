import React from "react";
import ButtonSelect from "../ButtonSelect/ButtonSelect";
import Multiselect, { MultiselectItem } from "../Multiselect/Multiselect";
import styles from "./input.module.scss";

interface InputProps {
    name: string;
    type: "text" | "email" | "date" | "multiselect" | "buttonSelect";
    dataOfMultiselect?: MultiselectItem[];
    typeOfMultiselect?: "filter" | "form";
    onClick?: () => void;
    valueOfButton?: string;
    styleInput?: object;
}

const Input: React.FC<InputProps> = ({
    name,
    type,
    dataOfMultiselect = [],
    typeOfMultiselect = "form",
    onClick = () => console.log("no on clicked was passed!"),
    valueOfButton = " ",
    styleInput,
}) => {
    switch (type) {
        case "date":
        case "email":
        case "text":
            return (
                <div className={styles.formItem}>
                    <div className={styles.formLabel}>
                        <label style={styleInput} htmlFor={name}>
                            {name}
                        </label>
                    </div>
                    <input
                        className={styles.formInput}
                        type={type}
                        name={name.replace(new RegExp(" ", "g"), "")}
                    />
                </div>
            );
        case "multiselect":
            return (
                <div className={styles.formItem}>
                    <Multiselect
                        styleInput={styleInput}
                        title={name}
                        type={typeOfMultiselect}
                        data={dataOfMultiselect}
                    />
                </div>
            );
        case "buttonSelect":
            return (
                <div className={styles.formItem}>
                    <ButtonSelect
                        onClick={() => onClick()}
                        type="button"
                        value={valueOfButton}
                        title={name}
                        styleInput={styleInput}
                    />
                </div>
            );
        default:
            alert("No valid type was received");
            return null;
    }
};

export default Input;
