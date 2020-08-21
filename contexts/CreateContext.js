import { useState, createContext } from "react";

export const CreateContext = createContext(null);

export const CreateStore = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <CreateContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
