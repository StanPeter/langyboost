import React, { SetStateAction } from "react";
import { MultiselectItem } from "utils/interfaces";
import { InputTypes } from "enums/types";
import ButtonSelect from "./ButtonSelect/ButtonSelect";
import Input from "./Input/Input";
import Select from "./Select/Select";
import inputStyles from "./Input/input.module.scss";

interface InputProps {
    name: string;
    type: InputTypes;
    placeholder?: string;
    dataOfMultiselect?: MultiselectItem[];
    useCase?: "filter" | "form";
    onClick?: () => void;
    valueOfButton?: string;
    styleInput?: object;
    value?: any;
    onChange?: (d: any) => SetStateAction<any>;
}

const InputSwitcher: React.FC<InputProps> = ({
    name,
    type,
    placeholder,
    dataOfMultiselect = [],
    useCase = "form",
    onClick = () => console.log("no on clicked was passed!"),
    valueOfButton = " ",
    styleInput,
    value,
    onChange,
}) => {
    //maybe won't be neccesary later on
    const inputClass = useCase === "form" ? inputStyles.formItem : inputStyles.filterItem;

    switch (type) {
        case "date":
        case "email":
        case "text":
            return (
                <div className={inputClass}>
                    <Input
                        styleInput={styleInput}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
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
                <div className={inputClass}>
                    <Select
                        styleInput={styleInput}
                        title={name}
                        useCase={useCase}
                        type={type}
                        data={dataOfMultiselect}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            );
        case "buttonSelect":
            return (
                <div className={inputClass}>
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

export default InputSwitcher;
