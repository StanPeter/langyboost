import { czech } from "settings/languages/czech";
import { english } from "settings/languages/english";

interface ILanguageObject {
    [key: string]: string;
}

const getLanguageObject = (lang: string): ILanguageObject => {
    switch (lang) {
        case "cz":
            return czech;
        case "en":
            return english;
        default:
            return {};
    }
};

export default getLanguageObject;
