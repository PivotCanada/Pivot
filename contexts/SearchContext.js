import { useState, createContext } from "react";

export const SearchContext = createContext(null);

export const SearchStore = ({ children }) => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(true);
  const [full, setFull] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        display,
        setDisplay,
        full,
        setFull,
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
