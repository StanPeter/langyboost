import React from "react";

interface ButtonProps {
    text: string;
    style?: object;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, style, onClick, active }) => {
    return (
        <button
            onClick={onClick}
            className="btn-custom"
            style={{
                backgroundColor: active !== false ? "#41B3A3" : "none",
                color: active !== false ? "#FAFBFF" : "#203A4F",
                ...style,
            }}
        >
            {text}
        </button>
    );
};

export default Button;
