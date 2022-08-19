import React, { SetStateAction, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MultiselectItem } from "utils/interfaces";
import styles from "./select.module.scss";

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
    let dropdownClasses = styles.multiselectDropdown;
    if (!hideDropdown) dropdownClasses = `${styles.multiselectDropdown} ${styles.dropdownAnimate}`;

    const addTypeClass = (inputClass: string) =>
        `${inputClass} ${useCase === "form" ? styles.formType : styles.filterType}`;

    return (
        <div className={styles.multiselect}>
            <div className={styles.multiselectWrapper}>
                <label style={styleInput} className={addTypeClass("")} htmlFor="">
                    {title}
                </label>
                <div className={addTypeClass(styles.multiselectInput)}>
                    <div className={styles.multiselectValueWrapper}>
                        {data
                            .filter((el) => multiselectValue.includes(el.value))
                            .map((el, i) => (
                                <div
                                    className={styles.multiselectValue}
                                    key={i}
                                    id={el.value}
                                    onClick={(e) => deleteItemHandler(e.currentTarget.id)}
                                >
                                    {el.imgSrc ? <img src={el.imgSrc} alt="" /> : el.text}
                                </div>
                            ))}
                    </div>
                    <div
                        className={styles.multiselectDropdownIcon}
                        onClick={() => setHideDropdown(!hideDropdown)}
                    >
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
            <div
                className={dropdownClasses}
                // style={{ display: hideDropdown ? "none" : "flex" }}
            >
                {data.map((el, i) => {
                    if (!el.text && !el.imgSrc) {
                        console.log("No parameter for multiselect was passed!");
                        return null;
                    }

                    return (
                        <div key={i}>
                            <li
                                className={styles.multiselectDropdownItem}
                                // id={el.imgSrc ? "img" + el.imgSrc : "txt" + el.text}
                                id={el.value}
                                onClick={(d) => addItemHandler(d.currentTarget.id)}
                            >
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
