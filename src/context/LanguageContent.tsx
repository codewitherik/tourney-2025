import { CreateContext, useContext, useState, useEffect, ReactNodee} from "react";
import {translations} from "./lib/translations.js";

type Language = "en"

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string, params?: Record<string, string number>) => string;
}

// Create a context with default values to avoid the undefined check
const defaultTranslate = (key: string) => key;

const defaultContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: defaultTranslate
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      // Check if user has a language preference stored in localStorage
      const storedLanguage = localStorage.getItem("language") as Language | null;
      
      if (storedLanguage && ["en", "de", "fr", "es"].includes(storedLanguage)) {
        setLanguage(storedLanguage);
      } else {
        // Try to detect browser language
        const browserLanguage = navigator.language.split('-')[0] as Language;
        if (["en", "de", "fr", "es"].includes(browserLanguage)) {
          setLanguage(browserLanguage);
        }
      }
    } catch (error) {
      console.error("Error detecting language:", error);
    }
  }, []);

  useEffect(() => {
    try {
      // Save preference to localStorage when language changes
      localStorage.setItem("language", language);
      
      // Update HTML lang attribute
      document.documentElement.setAttribute("lang", language);
    } catch (error) {
      console.error("Error saving language preference:", error);
    }
  }, [language]);

  // Translation function
  const t = (key: string, params?: Record<string, string | number>): string => {
    try {
      if (!key) return '';
      
      // Navigate to the nested key in the translations object
      const currentTranslations = translations[language] || translations.en;
      if (!currentTranslations) return key;
      
      // Split the key by dots and navigate through the object
      const keyParts = key.split('.');
      let result: any = currentTranslations;
      
      // Navigate through the nested objects
      for (const part of keyParts) {
        result = result?.[part];
        if (result === undefined) {
          // If translation not found in current language, try English
          let enResult = translations.en;
          for (const enPart of keyParts) {
            if (!enResult) break;
            enResult = enResult[enPart];
            if (!enResult) break;
          }
          return typeof enResult === 'string' ? enResult : key;
        }
      }
      
      // If we have a string, use it as translation
      let translation = typeof result === 'string' ? result : key;
      
      // Replace parameters in the translation string
      if (params && typeof translation === 'string') {
        Object.keys(params).forEach((param) => {
          translation = translation.replace(`{{${param}}}`, String(params[param]));
        });
      }
      
      return translation;
    } catch (error) {
      console.error('Translation error for key:', key, error);
      return key; // Return the key if any error occurs
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
