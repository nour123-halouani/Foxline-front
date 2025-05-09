import { useLanguage } from '../context/LanguageContext';

export const useTranslations = () => {
    const { messages } = useLanguage();

    const t = (key: string): string => {
        return messages[key] || key;
    };

    return t;
};
