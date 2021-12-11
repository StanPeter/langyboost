import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

interface MultiselectValue {
    isImg: Boolean;
    val: string;
}

interface MultiselectItem {
    imgSrc?: string;
    text?: string;
}

interface MultiselectProps {
    data: MultiselectItem[];
}

const Multiselect: React.FC<MultiselectProps> = ({ data }) => {
    const [multiselectVal, setMultiselectVal] = useState(
        [] as MultiselectValue[]
    );
    const [hideDropdown, setHideDropdown] = useState(true);

    useEffect(() => {
        setMultiselectVal([
            {
                isImg: true,
                val: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png",
            },
        ]);
    }, []);

    const addItemHandler = (itemVal: string) => {
        const typeOfVal = itemVal.slice(0, 3);
        const realVal = itemVal.slice(3);
        const valsOfMultiselect = Object.values(multiselectVal).map(
            (d) => d.val
        );

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

    let dropdownClasses = "custom-multiselect-dropdown";
    if (!hideDropdown)
        dropdownClasses = "custom-multiselect-dropdown dropdown-animate";

    return (
        <div className="custom-multiselect">
            <div className="custom-multiselect-base">
                <label htmlFor="">Filter by language</label>
                <div className="multiselect-input">
                    <div className="multiselect-value-wrapper">
                        {multiselectVal.map((el, i) => (
                            <div
                                className="multiselect-value"
                                key={i}
                                id={el.val}
                                onClick={(e) =>
                                    deleteItemHandler(e.currentTarget.id)
                                }
                            >
                                {el.isImg ? (
                                    <img src={el.val} alt="" />
                                ) : (
                                    el.val
                                )}
                            </div>
                        ))}
                    </div>
                    <div
                        className="multiselect-dropdown-icon"
                        onClick={() => setHideDropdown(!hideDropdown)}
                    >
                        <AiOutlineArrowDown />
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
                        <>
                            <li
                                className="multiselect-dropdown-item"
                                id={
                                    el.imgSrc
                                        ? "img" + el.imgSrc
                                        : "txt" + el.text
                                }
                                key={i}
                                onClick={(d) =>
                                    addItemHandler(d.currentTarget.id)
                                }
                            >
                                <div>
                                    {el.imgSrc ? (
                                        <img src={el.imgSrc} alt="" />
                                    ) : null}
                                    {el.text ? <p>{el.text}</p> : null}
                                </div>
                            </li>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Multiselect;
