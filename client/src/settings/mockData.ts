import CustomGe1 from 'assets/images/flags/customGe1.png';
import CustomGe2 from 'assets/images/flags/customGe2.png';
import CustomGe3 from 'assets/images/flags/customGe3.png';
import CustomGe4 from 'assets/images/flags/customGe4.png';
import CustomGe5 from 'assets/images/flags/customGe5.png';
import EnFlagImg from 'assets/images/flags/en.png';
import EsFlagImg from 'assets/images/flags/es.png';
import FrFlagImg from 'assets/images/flags/fr.png';
import GeFlagImg from 'assets/images/flags/ge.png';
import GrFlagImg from 'assets/images/flags/gr.png';
import ItFlagImg from 'assets/images/flags/it.png';
import PtFlagImg from 'assets/images/flags/pt.png';
import RuFlagImg from 'assets/images/flags/ru.png';

// cardIndex 0 means course is not displayed, then the rest goes from left 1 2 3(middle one) 4 5
export const mainCourses = [
    {
        value: 'en',
        imgSrc: EnFlagImg,
        cardIndex: 0,
        text: 'English language, West Germanic language of the Indo-European language family that is closely related to the Frisian, German, and Dutch (in Belgium called Flemish) languages. English originated in England and is the dominant language of the United States, the United Kingdom, Canada, Australia, Ireland, New Zealand, and various island nations in the Caribbean Sea and the Pacific Ocean. It is also an official language of India, the Philippines, Singapore, and many countries in sub-Saharan Africa, including South Africa. English is the first choice of foreign language in most other countries of the world, and it is that status that has given it the position of a global lingua franca. It is estimated that about a third of the world’s population, some two billion persons, now use English.',
        name: 'English'
    },
    {
        value: 'eS',
        imgSrc: EsFlagImg,
        cardIndex: 0,
        text: 'Spanish (español or castellano, Castilian) is a Romance language of the Indo-European language family that evolved from colloquial spoken Latin in the Iberian Peninsula of Europe. Today, it is a global language with nearly 500 million native speakers, mainly in the Americas and Spain.',
        name: 'Spanish'
    },
    {
        value: 'fr',
        imgSrc: FrFlagImg,
        cardIndex: 0,
        text: 'French (français [fʁɑ̃sɛ] or langue française [lɑ̃ɡ fʁɑ̃sɛːz]) is a Romance language of the Indo-European family. It descended from the Vulgar Latin of the Roman Empire, as did all Romance languages. French evolved from Gallo-Romance, the Latin spoken in Gaul, and more specifically in Northern Gaul. ',
        name: 'French'
    },
    {
        value: 'ge',
        imgSrc: GeFlagImg,
        cardIndex: 0,
        text: '    Official language of both Germany and Austria and one of the official languages of Switzerland. German, with its 130 million native speakers, belongs to the West Germanic group of the Indo-European language family, along with English, Frisian, and Dutch.',
        name: 'German'
    },
    {
        value: 'gr',
        imgSrc: GrFlagImg,
        cardIndex: 0,
        text: 'Greek (Modern Greek: Ελληνικά, romanized: Elliniká; Ancient Greek: Ἑλληνική, romanized: Hellēnikḗ) is an independent branch of the Indo-European family of languages, native to Greece, Cyprus, southern Albania, and other regions of the Balkans, the Black Sea coast, Asia Minor, and the Eastern Mediterranean.',
        name: 'German'
    },
    {
        value: 'it',
        imgSrc: ItFlagImg,
        cardIndex: 0,
        text: 'Italian (italiano [itaˈljaːno] (listen) or lingua italiana [ˈliŋɡwa itaˈljaːna]) is a Romance language of the Indo-European language family that evolved from the Vulgar Latin of the Roman Empire. About 85 million people speak this language (2022). ',
        name: 'Italian'
    },
    {
        value: 'ru',
        imgSrc: RuFlagImg,
        cardIndex: 0,
        text: 'Russian (Russian: русский язык, romanized: russkij jazyk) is an East Slavic language mainly spoken across Russia. It is the native language of the Russians, and belongs to the Indo-European language family. It is one of four living East Slavic languages,[j] and is also a part of the larger Balto-Slavic languages.',
        name: 'Russian'
    },
    {
        value: 'pt',
        imgSrc: PtFlagImg,
        cardIndex: 0,
        text: 'Portuguese (português or, in full, língua portuguesa) is a western Romance language of the Indo-European language family, originating in the Iberian Peninsula of Europe. It is an official language of Portugal, Brazil, Cape Verde, Angola, Mozambique, Guinea-Bissau and São Tomé and Príncipe,[6] while having co-official language status in East Timor, Equatorial Guinea, and Macau.',
        name: 'Portuguese'
    }
];

export const customCourses = [
    { value: 'customGe1', imgSrc: CustomGe1, cardIndex: 0, text: 'text', name: 'Top500' },
    { value: 'customGe2', imgSrc: CustomGe2, cardIndex: 0, text: 'text', name: 'Science' },
    { value: 'customGe3', imgSrc: CustomGe3, cardIndex: 0, text: 'text', name: 'Economy' },
    { value: 'customGe4', imgSrc: CustomGe4, cardIndex: 0, text: 'text', name: 'Travel' },
    { value: 'customGe5', imgSrc: CustomGe5, cardIndex: 0, text: 'text', name: 'Bavarian' }
];

export const betaCourses = [];

// GET /clients/vat MOCK
const getAvailableCoursesMockData = {
    main: mainCourses,
    betaCourses: betaCourses,
    customCourses: customCourses
};

// MOCK connector
export default {
    getAvailableCoursesMockData: getAvailableCoursesMockData
};
