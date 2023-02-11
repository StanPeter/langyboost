import TranslateText from "components/hoc/TranslateText";
import React from "react";
import globalClasses from "styles/globalClasses.module.scss";

interface ILink {
    text?: string;
    onClick?: () => void;
    whiteText?: boolean;
    children?: React.ReactNode;
    classes?: string;
}

const Link: React.FC<ILink> = ({ text = "", onClick = () => {}, whiteText, children, classes = "" }) => {
    if (children)
        return (
            <li onClick={onClick} className={`${classes} ${whiteText ? globalClasses.whiteText : ""}`}>
                {children}
            </li>
        );

    return (
        <li onClick={onClick} className={`${classes} ${whiteText ? globalClasses.whiteText : ""}`}>
            <TranslateText>{text}</TranslateText>
        </li>
    );
};

export default Link;
