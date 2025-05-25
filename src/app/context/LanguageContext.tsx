'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Messages = { [key: string]: any };
type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  messages: Messages;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState('en');
  const [messages, setMessages] = useState<Messages>({});

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
    const loadMessages = async () => {
      const frontend = await import(`@/app/i18n/frontend/${lang}.json`);
      const backend = await import(`@/app/i18n/backend/${lang}.json`);

      setMessages({ ...frontend, ...backend });
    };

    loadMessages();
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
