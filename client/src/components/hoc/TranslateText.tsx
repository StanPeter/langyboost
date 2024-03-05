import { ERRORS } from 'constants/errors';
import english from 'constants/languages/english.json';
import React from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from 'ts/types';

interface ILanguageObject {
    [key: string]: string;
}

// for now only supports English
const getLanguageObject = (lang: string): ILanguageObject => {
    switch (lang) {
        case 'en':
            return english;
        default:
            return {};
    }
};

interface ITranslateText {
    children: string;
    params?: (string | number)[];
    uppercase?: boolean;
}

// Translates text into desired target language
export const TranslateText: React.FC<ITranslateText> = ({ children, uppercase }) => {
    const language = useSelector((state: TRootState) => state.settings.language);

    let translatedText: string = getLanguageObject(language)[children];

    // error handling
    if (!translatedText && children) {
        console.log(ERRORS.PHRASE_KEY_NOT_FOUND, children, language);
    }
    if (uppercase) translatedText = translatedText.toUpperCase();

    return <span>{translatedText}</span>;
};

export default TranslateText;
