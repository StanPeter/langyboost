import TranslateText from "components/hoc/TranslateText";
import React from "react";
import globalClasses from "styles/globalClasses.module.scss";

interface IParagraph {
    text: string;
    shouldTranslate?: boolean;
    whiteText?: boolean;
    classes?: string;
}

// custom header due to text translation
const Paragraph: React.FC<IParagraph> = ({ text, whiteText, shouldTranslate = true, classes }) => {
    const defaultClasses = whiteText ? `${globalClasses.whiteText}` : "";

    const translatedText = shouldTranslate ? <TranslateText>{text}</TranslateText> : text;

    return <p className={`${classes} ${defaultClasses}`}>{translatedText}</p>;
};

export default Paragraph;
