import TranslateText from "components/hoc/TranslateText";
import React from "react";
import globalClasses from "styles/globalClasses.module.scss";

interface IHeader {
    text: string;
    level: 1 | 2 | 3 | 4 | 5;
    whiteText?: boolean;
}

// custom header due to text translation
const Header: React.FC<IHeader> = ({ text, level, whiteText }) => {
    const classes = whiteText ? `${globalClasses.whiteText}` : "";

    switch (level) {
        case 1:
            return (
                <h1 className={classes}>
                    <TranslateText>{text}</TranslateText>
                </h1>
            );
        case 2:
            return (
                <h2 className={classes}>
                    <TranslateText>{text}</TranslateText>
                </h2>
            );
        case 3:
            return (
                <h3 className={classes}>
                    <TranslateText>{text}</TranslateText>
                </h3>
            );
        case 4:
            return (
                <h4 className={classes}>
                    <TranslateText>{text}</TranslateText>
                </h4>
            );
        case 5:
            return (
                <h5 className={classes}>
                    <TranslateText>{text}</TranslateText>
                </h5>
            );
    }
};

export default Header;
