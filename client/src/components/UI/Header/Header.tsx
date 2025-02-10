import TranslateText from 'components/hoc/TranslateText';
import React from 'react';


interface IHeader {
    text: string;
    level: 1 | 2 | 3 | 4 | 5;
    whiteText?: boolean;
    shouldTranslate?: boolean;
    classes?: React.ComponentProps<'h1'>['className'];
    style?: React.ComponentProps<'h1'>['style'];
}

// custom header due to text translation
const Header: React.FC<IHeader> = ({ text, level, whiteText, shouldTranslate = true, classes, style }) => {
    const headerClasses = whiteText ? `${classes} whiteText` : classes;
    const translatedText = shouldTranslate ? <TranslateText>{text}</TranslateText> : text;


    switch (level) {
        case 1:
            return <h1 className={headerClasses} style={style}>{translatedText}</h1>;
        case 2:
            return <h2 className={headerClasses} style={style}>{translatedText}</h2>;

        case 3:
            return <h3 className={headerClasses} style={style}>{translatedText}</h3>;
        case 4:
            return <h4 className={headerClasses} style={style}>{translatedText}</h4>;
        case 5:
            return <h5 className={headerClasses} style={style}>{translatedText}</h5>;

    }
};

export default Header;
