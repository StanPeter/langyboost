import React from "react";
import "styles/button.scss";

interface ButtonProps {
    text: string;
    style?: object;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, style, onClick }) => {
    return (
        <button onClick={onClick} className="btn" style={style}>
            {text}
        </button>
    );
};

export default Button;
