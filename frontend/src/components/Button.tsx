import React from "react";
import "styles/button.scss";

interface ButtonProps {
    text: string;
    style?: object;
}

const Button: React.FC<ButtonProps> = ({ text, style }) => {
    return (
        <button className="btn" style={style}>
            {text}
        </button>
    );
};

export default Button;
