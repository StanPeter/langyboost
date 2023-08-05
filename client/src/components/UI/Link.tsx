import TranslateText from 'components/hoc/TranslateText';
import React from 'react';
import globalClasses from 'styles/globalClasses.module.scss';

interface ILink {
    text?: string;
    onClick?: () => void;
    whiteText?: boolean;
    children?: React.ReactNode;
    classes?: string;
    hyperlinkClasses?: string;
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Link: React.FC<ILink> = ({
    text = '',
    onClick = () => {},
    whiteText,
    children,
    classes = '',
    hyperlinkClasses = ''
}) => {
    if (children)
        return (
            <li className={`${classes} ${whiteText ? globalClasses.whiteText : ''}`}>
                <a onClick={onClick} style={style} className={hyperlinkClasses}>
                    {children}
                </a>
            </li>
        );

    return (
        <li onClick={onClick} className={`${classes} ${whiteText ? globalClasses.whiteText : ''}`}>
            <a onClick={onClick} className={hyperlinkClasses}>
                <TranslateText>{text}</TranslateText>
            </a>
        </li>
    );
};

export default Link;
