import TranslateText from "components/hoc/TranslateText";
import React from "react";
import globalClasses from "styles/globalClasses.module.scss";

interface IPadagraph {
    text: string;
    shouldTranslate?: boolean;
    whiteText?: boolean;
}

// custom header due to text translation
const Paragraph: React.FC<IPadagraph> = ({ text, whiteText, shouldTranslate = true }) => {
    const classes = whiteText ? `${globalClasses.whiteText}` : "";

    const translatedText = shouldTranslate ? <TranslateText>{text}</TranslateText> : text;

    return <p className={classes}>{translatedText}</p>;
};

export default Paragraph;
