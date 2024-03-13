import TranslateText from 'components/hoc/TranslateText';
import React from 'react';
import globalClasses from 'styles/globalClasses.module.scss';

interface IHeader {
    text: string;
    level: 1 | 2 | 3 | 4 | 5;
    whiteText?: boolean;
    shouldTranslate?: boolean;
    classes?: React.ComponentProps<'h1'>['className'];
}

// custom header due to text translation
const Header: React.FC<IHeader> = ({ text, level, whiteText, shouldTranslate = true, classes }) => {
    const headerClasses = whiteText ? `${classes} ${globalClasses.whiteText}` : classes;
    const translatedText = shouldTranslate ? <TranslateText>{text}</TranslateText> : text;

    switch (level) {
        case 1:
            return <h1 className={headerClasses}>{translatedText}</h1>;
        case 2:
            return <h2 className={headerClasses}>{translatedText}</h2>;
        case 3:
            return <h3 className={headerClasses}>{translatedText}</h3>;
        case 4:
            return <h4 className={headerClasses}>{translatedText}</h4>;
        case 5:
            return <h5 className={headerClasses}>{translatedText}</h5>;
    }
};

export default Header;
