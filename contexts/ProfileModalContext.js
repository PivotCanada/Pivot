import { useState, useEffect, createContext } from "react";

export const ProfileModalContext = createContext(null);

export const ProfileModalStore = ({ initializeUser = () => {}, children }) => {
  const [profileIds, setProfileIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(true);

  const getIndex = async (id) => {
    const i = profileIds.indexOf(id);
    setIndex(i);
    setNext(i !== profileIds.length - 1);
    setPrevious(i !== 0);
  };

  const nextUser = () => {
    const i = profileIds.indexOf(id);
    const next = profileIds[i + 1];
    setId(next);
  };

  const previousUser = () => {
    const i = profileIds.indexOf(id);
    const prev = profileIds[i - 1];
    setId(prev);
  };

  const extractProfileIds = (list) =>
    setProfileIds(list.map((item) => item._id));

  useEffect(() => {
    console.log(profileIds);
    setId(profileIds[0]);
  }, [profileIds]);

  useEffect(() => {
    getIndex(id);
  }, [id]);

  return (
    <ProfileModalContext.Provider
      value={{
        initializeUser,
        open,
        setOpen,
        id,
        setId,
        next,
        previous,
        nextUser,
        previousUser,
        profileIds,
        setProfileIds,
        extractProfileIds,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};
