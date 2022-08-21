import React, { SetStateAction, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MultiselectItem } from "utils/interfaces";
import styles from "./select.module.scss";
import inputStyles from "components/ui/Input/input.module.scss";

interface MultiselectProps {
    title: string;
    data: MultiselectItem[];
    value: string[];
    useCase: "filter" | "form"; //whether is used inside a filter or a form
    type: "multiselect" | "singleselect";
    styleInput?: object;
    onChange: (d: any) => SetStateAction<any>;
}

const Select: React.FC<MultiselectProps> = ({
    data,
    title,
    useCase,
    styleInput,
    value,
    type,
    onChange,
}) => {
    /* HOOKS */
    const [multiselectValue, setMultiselectValue] = useState<string[]>([]);
    const [hideDropdown, setHideDropdown] = useState(true);

    /* set initial value */
    useEffect(() => {
        if (value) setMultiselectValue(value);
    }, [value]);

    /* HANDLERS */
    const addItemHandler = (itemVal: string) => {
        if (multiselectValue.includes(itemVal)) return;

        if (type === "multiselect") {
            const newValue = [...multiselectValue, itemVal];
            setMultiselectValue(newValue);
            onChange(newValue);
        } else {
            setMultiselectValue([itemVal]);
            onChange(itemVal);
        }
    };

    const deleteItemHandler = (itemVal: string) => {
        if (type === "multiselect") {
            const newValue = multiselectValue.filter((value) => value !== itemVal);
            setMultiselectValue(newValue);
            onChange(newValue);
        } else {
            setMultiselectValue([]);
            onChange(null);
        }
    };

    /* ADDING STYLES */
    const addTypeClass = (inputClass: string) =>
        `${inputClass} ${useCase === "form" ? styles.formType : styles.filterType}`;

    return (
        <div className={styles.container}>
            <div
                className={styles.inputWrapper}
                style={{ background: !hideDropdown ? "#daffe9" : undefined }}
            >
                <label
                    style={styleInput}
                    className={`${inputStyles.formLabel} ${addTypeClass("")}`}
                    htmlFor=""
                >
                    {title}
                </label>
                <div
                    onClick={() => setHideDropdown(!hideDropdown)}
                    style={{ borderBottomRightRadius: !hideDropdown ? "0px" : undefined }}
                    className={addTypeClass(styles.input)}
                >
                    <div className={styles.valueWrapper}>
                        {data
                            .filter((el) => multiselectValue.includes(el.value))
                            .map((el, i) => (
                                <div
                                    className={styles.value}
                                    key={i}
                                    id={el.value}
                                    onClick={(e) => deleteItemHandler(e.currentTarget.id)}
                                >
                                    {el.imgSrc ? <img src={el.imgSrc} alt="" /> : el.text}
                                </div>
                            ))}
                    </div>
                    <div
                        className={styles.dropdownIcon}
                        onClick={() => setHideDropdown(!hideDropdown)}
                    >
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
            <div
                className={`${styles.dropdown} ${addTypeClass("")} ${
                    !hideDropdown ? styles.dropdownOpen : ""
                }`}
            >
                {data.map((el, i) => {
                    if (!el.text && !el.imgSrc) {
                        console.log("No parameter for multiselect was passed!");
                        return null;
                    }

                    return (
                        <div
                            key={i}
                            onClick={(d) => {
                                if (type === "singleselect") setHideDropdown(true);
                                addItemHandler(d.currentTarget.id);
                            }}
                            className={styles.dropdownItemWrapper}
                            id={el.value}
                        >
                            <li className={styles.dropdownItem}>
                                <div>
                                    {el.imgSrc ? <img src={el.imgSrc} alt="" /> : null}
                                    {el.text ? <p>{el.text}</p> : null}
                                </div>
                            </li>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Select;
