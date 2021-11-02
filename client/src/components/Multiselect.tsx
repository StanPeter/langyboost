import React, { useEffect, useState } from "react";

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

    useEffect(() => {
        setMultiselectVal([
            {
                isImg: true,
                val: "https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png",
            },
        ]);
    }, []);

    return (
        <div className="custom-multiselect">
            <div className="custom-multiselect-value">
                <label htmlFor="">Filter by language</label>
                <div className="multiselect-value">
                    {multiselectVal.map((el) => (
                        <div onClick={(d) => console.log(d.target)}>
                            {el.isImg ? <img src={el.val} alt="" /> : el.val}
                        </div>
                    ))}
                </div>
            </div>
            <div className="custom-multiselect-dropdown">
                {data.map((el) => {
                    if (!el.text && !el.imgSrc) {
                        console.log("No parameter for multiselect was passed!");
                        return null;
                    }

                    return (
                        <li onClick={(d) => console.log(d.target)}>
                            {el.imgSrc ? <img src={el.imgSrc} alt="" /> : null}
                            {el.text ? <p>{el.text}</p> : null}
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default Multiselect;
