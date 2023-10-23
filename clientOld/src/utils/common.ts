import { Params } from 'ts/interfaces';
import { TLanguage, TStorage } from 'ts/types';

// class handling commonn utility functions
class Common {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    static sleep = (cb: () => any, time = 1000) => {
        return new Promise(res => {
            setTimeout(() => {
                res(cb());
            }, time);
        });
    };

    /**
     *
     * @param key key to search inside of storage
     * @returns return either parsed value or nothing
     */
    static getStorageValue = (key: string, getFrom: TStorage) => {
        const item = getFrom === 'localStorage' ? localStorage.getItem(key) : sessionStorage.getItem(key);

        // return either JSON or normal item
        if (item) {
            try {
                return JSON.parse(item);
            } catch (e) {
                return item;
            }
        }

        return '';
    };

    /**
     *
     * @param key key to set inside of storage
     * @param value value to be stringyfied and set
     */
    static setStorageValue = (key: string, value: any, saveInto: TStorage) => {
        if (saveInto === 'localStorage') localStorage.setItem(key, JSON.stringify(value));
        else sessionStorage.setItem(key, JSON.stringify(value));
    };

    // language converter, for now it supports only english
    /**
     *
     * @param lang desired language translation
     * @returns the translation
     */
    static getLanguageObject = (lang: TLanguage): Params => {
        switch (lang) {
            // case 'pl':
            //     return polish;
            // case 'en':
            //     return english;
            // case 'fr':
            //     return french;
            default:
                return {};
        }
    };
}

export default Common;
