import { useState, createContext } from "react";

export const ProfileContext = createContext(null);

export const ProfileStore = ({
  initializeUser = () => {},
  open,
  setOpen,
  children,
}) => {
  return (
    <ProfileContext.Provider
      value={{
        initializeUser,
        open,
        setOpen,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
