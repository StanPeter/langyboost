import TranslateText from "components/hoc/TranslateText";
import React from "react";
import globalClasses from "styles/globalClasses.module.scss";

interface ISpan {
    text: string;
    shouldTranslate?: boolean;
    whiteText?: boolean;
}

// custom header due to text translation
const Span: React.FC<ISpan> = ({ text, whiteText, shouldTranslate = true }) => {
    const classes = whiteText ? `${globalClasses.whiteText}` : "";

    const translatedText = shouldTranslate ? <TranslateText>{text}</TranslateText> : text;

    return <span className={classes}>{translatedText}</span>;
};

export default Span;
