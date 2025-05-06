import React, { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'English';
    });

    const setLang = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang); 
    };

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LangContext.Provider value={{ language, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
