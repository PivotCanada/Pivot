import { useState, useEffect, useContext, createContext } from "react";
// Contexts
import { ModalContext } from "./ModalContext";
// Utils
import { searchPosts } from "../utils/general/searchPosts";
import { searchUsers } from "../utils/general/searchUsers";

export const FilterContext = createContext(null);

export const FilterStore = ({ children }) => {
  const [activeTags, setActiveTags] = useState([]);

  const filterPosts = async (setPosts, extractIds) => {
    await searchPosts({
      tags: activeTags,
    }).then((response) => {
      if (response.status === "success") {
        let data = response.data;
        extractIds(data);
        setPosts(data);
      } else return;
    });
  };

  const filterProfiles = async (setProfiles, extractIds) => {
    await searchUsers({
      tags: activeTags,
    }).then((response) => {
      if (response.status === "success") {
        let data = response.data;
        extractIds(data);
        setProfiles(response.data);
      } else return;
    });
  };

  return (
    <FilterContext.Provider
      value={{
        activeTags,
        setActiveTags,
        filterPosts,
        filterProfiles,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
