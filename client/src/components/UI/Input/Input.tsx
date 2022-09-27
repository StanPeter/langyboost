import React, { SetStateAction, useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
    name: string;
    onClick?: () => void;
    styleInput?: object;
    value?: any;
    type: "text" | "date" | "email" | "password";
    onChange?: (d: any) => SetStateAction<any>;
    placeholder?: string;
    withoutLabel?: boolean;
}

const Input: React.FC<InputProps> = ({ name, styleInput, value, onChange, type, placeholder, withoutLabel }) => {
    const [focused, setFocused] = useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    return (
        <React.Fragment>
            {!withoutLabel && (
                <div className={styles.formLabel} style={{ background: focused ? "#daffe9" : undefined }}>
                    <label style={styleInput} htmlFor={name}>
                        {name}
                    </label>
                </div>
            )}
            <input
                onFocus={onFocus}
                placeholder={placeholder}
                onBlur={onBlur}
                className={`${styles.formInput} ${withoutLabel ? styles.withoutLabel : ""}`}
                type={type}
                style={{
                    background: focused ? "#daffe9" : undefined,
                    borderRadius: !withoutLabel ? "0 5px 5px 0" : "none"
                }}
                value={value}
                onChange={e => {
                    if (onChange) onChange(e.target.value);
                }}
                name={name.replace(new RegExp(" ", "g"), "")}
            />
        </React.Fragment>
    );
};

export default Input;
