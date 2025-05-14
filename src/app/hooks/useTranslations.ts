import { useLanguage } from '../context/LanguageContext';

export const useTranslations = () => {
    const { messages } = useLanguage();

    const t = (key: string, params?: Record<string, any>): string => {
        let translation = messages[key] || key;

        if (params) {
            Object.entries(params).forEach(([paramKey, value]) => {
                translation = translation.replace(`{${paramKey}}`, String(value));
            });
        }

        return translation;
    };

    return t;
};
