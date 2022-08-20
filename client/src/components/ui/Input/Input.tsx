import React, { SetStateAction } from "react";
import { MultiselectItem } from "utils/interfaces";
import { InputTypes } from "utils/types";
import ButtonSelect from "../ButtonSelect/ButtonSelect";
import Select from "../Select/Select";
import styles from "./input.module.scss";

interface InputProps {
    name: string;
    type: InputTypes;
    dataOfMultiselect?: MultiselectItem[];
    typeOfMultiselect?: "filter" | "form";
    onClick?: () => void;
    valueOfButton?: string;
    styleInput?: object;
    value?: any;
    onChange?: (d: any) => SetStateAction<any>;
}

const Input: React.FC<InputProps> = ({
    name,
    type,
    dataOfMultiselect = [],
    typeOfMultiselect = "form",
    onClick = () => console.log("no on clicked was passed!"),
    valueOfButton = " ",
    styleInput,
    value,
    onChange,
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
        case "singleselect":
            if (!onChange)
                onChange = () => {
                    console.log("on change not declared");
                };

            return (
                <div className={styles.formItem}>
                    <Select
                        styleInput={styleInput}
                        title={name}
                        useCase={typeOfMultiselect}
                        type={type}
                        data={dataOfMultiselect}
                        value={value}
                        onChange={onChange}
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
