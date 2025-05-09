'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  messages: { [key: string]: string };
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState('en');
  const [messages, setMessages] = useState<{ [key: string]: string }>({});

  const setLang = (newLang: string) => {
    localStorage.setItem('lang', newLang);
    setLangState(newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    const stored = localStorage.getItem('lang') || 'en';
    setLangState(stored);
  }, []);

  useEffect(() => {
    import(`@/app/i18n/${lang}.json`).then(setMessages);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, messages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
