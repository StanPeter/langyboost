import { Typography } from '@mui/material';
import TranslateText from 'components/hoc/TranslateText';
import React from 'react';

interface IParagraph {
    text: string;
    shouldTranslate?: boolean;
    whiteText?: boolean;
    classes?: React.ComponentProps<'p'>['className'];
}

// custom header due to text translation
const Paragraph: React.FC<IParagraph> = ({ text, whiteText, shouldTranslate = true, classes }) => {
    const defaultClasses = whiteText ? `whiteText` : '';

    const translatedText = shouldTranslate ? <TranslateText>{text}</TranslateText> : text;

    return (
        <Typography variant="body1" className={`${classes} ${defaultClasses}`}>
            {translatedText}
        </Typography>
    );
};

export default Paragraph;
