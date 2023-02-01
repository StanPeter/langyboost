import React from "react";
import getLanguageObject from "utils/getLanguageObject";

interface ITranslateText {
    children: string;
    params?: (string | number)[];
    useCase?: "uppercase" | "default";
}

// NOT IMPLEMENTED YET

// Translates text into our target language
export const TranslateText: React.FC<ITranslateText> = ({ children, params, useCase = "default" }) => {
    const language = "en";
    let translatedText: string = getLanguageObject(language)[children];

    if (useCase === "uppercase") translatedText = translatedText.toUpperCase();

    // params replaces all {{xxx}} in string (according to the index)
    if (params && children) {
        translatedText &&
            params?.map(e => {
                const replaced = translatedText.replace(/{{( *\w*)*}}/, getLanguageObject(language)[e] || String(e));
                translatedText = replaced;
            });

        return <span className="translateText">{translatedText || children}</span>;
    }

    return <span className="translateText">{translatedText || children}</span>;
};

export default TranslateText;
