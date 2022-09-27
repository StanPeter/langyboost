// this file was copied, later on will add some required regExp

export {};

// export const splitUrl = /(\/)(?=[^/]*$)/;
// export const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Validace emailu
// export const phoneNumberRegExp = /^(\+|00)?[1-9][0-9]{8,14}$/; // Validace tel. čísla
// export const passwordRegExp = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=^.{8,256}$)/; // Validace hesla (min 8 znaků, velká a malá písmena)
// export const icoRegExp = /^[0-9]{8}$/; // Validace iča
// export const nidRegExp = /^[0-9]{10}$/; // Validace nid
// export const rodneCisloRegExp = /^[0-9]{2}([0257][1-9]|[1368][0-2])([0][1-9]|[12][0-9]|[3][01])[0-9]{3,4}$/; // Validace rodneho cisla
// export const leiRegExp = /^[A-Z0-9]{20}$/; // Validace LEI
// export const procentaMinimum10RegExp = /^(100(?:[.,]0+)?|[1-9][0-9](?:[.,][0-9]{0,2})?)?$/; // 10.00 - 100.00 desatine mista
// export const procentaRegExp = /^(100(?:[.,]0+)?|[0-9]{1,2}(?:[.,][0-9]{0,2})?)?$/; // 0.00 - 100.00%
// export const zakladnyKapitalRegExp = /^\d{0,13}(?:[.,]\d{0,2})?/; // pouzite v ISINe
// export const iBanCountry = /^([A-Z]{2})(\d{2})([A-Z\d]+)$/; // sucast iban validacie
// export const dicIneZemeRegExp = /^[A-Z]{2}[A-Z0-9]{1,13}$/; // dic cizí země
// export const dicCzRegExp = /^CZ([0-9]{8,10})$/; // dic cz
// export const cisloOnly20RegExp = /^[0-9]{0,20}$/; // dic cz
// export const dveDesetinneMistaRegExp = /^\d*(?:[.,]\d{0,2})?$/; // kontrola 2 desetinne mista
// export const naceRegExp = /^[0-9]{2}$/; // pozite v isine
// export const globalInputRegExp =
//     // eslint-disable-next-line max-len
//     /^[a-zA-Z\dÀ-ÖØ-öø-ɏ'()[\]{},.;\\/\-+:!@#$%^*?_=|&<>"]+(\s[a-zA-Z\dÀ-ÖØ-öø-ɏ'()[\]{},.;\\/\-+:!@#$%^*?_=|&<>"]+)*\s*$/; // kontrola nevalidnych znakov
// export const formatMoneyAmount = /\B(?=(\d{3})+(?!\d))/g; // pouzite pri formatovani cisel na napr: 1000 => 1 000 ...
// export const stringTranslateParamsRegExp = /{{( *\w*)*}}/; // pouzite pri TranslateText
