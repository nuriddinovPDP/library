import { translations } from "../translation";

export const getTranslation = (language, key) => {
    return translations[language]?.[key];
};
