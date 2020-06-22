import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const useLanguage = (data) => {
  const [keys, setKeys] = useState({});
  const { language, setLanguage } = useContext(LanguageContext);

  const truthy = (key) => {
    if (key) return key;
    else return "";
  };

  const changeLanguage = () => {
    if (language === "english") {
      setLanguage("french");
    } else {
      setLanguage("english");
    }
  };

  const determineLanguage = (data) => {
    let selected = {};

    for (var key in data) {
      switch (language) {
        case "english":
          selected[key] = data[key].english;
          break;

        case "french":
          selected[key] = data[key].french;
          break;

        default:
          selected[key] = "";
          break;
      }
    }

    setKeys(selected);
  };

  useEffect(() => {
    determineLanguage(data);
  }, [language]);

  return {
    keys,
    truthy,
    changeLanguage,
  };
};

export default useLanguage;
