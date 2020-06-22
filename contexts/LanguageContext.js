import { useState, createContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageStore = ({ children }) => {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
