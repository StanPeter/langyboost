import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./multiselect.module.scss";

interface MultiselectValue {
    isImg: boolean;
    val: string;
}

export interface MultiselectItem {
    imgSrc?: string;
    text?: string;
}

interface MultiselectProps {
    title: string;
    data: MultiselectItem[];
    type: "filter" | "form"; //whether is used inside a filter or a form
}

const Multiselect: React.FC<MultiselectProps> = ({ data, title, type }) => {
    const [multiselectVal, setMultiselectVal] = useState([] as MultiselectValue[]);
    const [hideDropdown, setHideDropdown] = useState(true);

    useEffect(() => {
        setMultiselectVal([
            // {
            //     isImg: true,
            //     val: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png",
            // },
        ]);
    }, []);

    const addItemHandler = (itemVal: string) => {
        const typeOfVal = itemVal.slice(0, 3);
        const realVal = itemVal.slice(3);
        const valsOfMultiselect = Object.values(multiselectVal).map((d) => d.val);

        if (valsOfMultiselect.includes(realVal)) return;

        setMultiselectVal([
            ...multiselectVal,
            {
                isImg: typeOfVal === "img",
                val: realVal,
            },
        ]);
    };

    const deleteItemHandler = (itemVal: string) => {
        setMultiselectVal(multiselectVal.filter((val) => val.val !== itemVal));
    };

    let dropdownClasses = styles.multiselectDropdown;
    if (!hideDropdown) dropdownClasses = `${styles.multiselectDropdown} ${styles.dropdownAnimate}`;

    const addTypeClass = (inputClass: string) =>
        `${inputClass} ${type === "form" ? styles.formType : styles.filterType}`;

    return (
        <div className={styles.multiselect}>
            <div className={styles.multiselectWrapper}>
                <label className={addTypeClass("")} htmlFor="">
                    {title}
                </label>
                <div className={addTypeClass(styles.multiselectInput)}>
                    <div className={styles.multiselectValueWrapper}>
                        {multiselectVal.map((el, i) => (
                            <div
                                className={styles.multiselectValue}
                                key={i}
                                id={el.val}
                                onClick={(e) => deleteItemHandler(e.currentTarget.id)}
                            >
                                {el.isImg ? <img src={el.val} alt="" /> : el.val}
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
                                id={el.imgSrc ? "img" + el.imgSrc : "txt" + el.text}
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

export default Multiselect;
