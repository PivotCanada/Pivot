import { useState, createContext } from "react";

export const FormContext = createContext(null);

export const FormStore = ({ children }) => {
  const [onboarding, setOnboarding] = useState(true);

  return (
    <FormContext.Provider
      value={{
        onboarding,
        setOnboarding,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
