import { useState, createContext } from "react";

export const ModalContext = createContext(null);

export const ModalStore = ({ initializeUser = () => {}, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        initializeUser,
        open,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
