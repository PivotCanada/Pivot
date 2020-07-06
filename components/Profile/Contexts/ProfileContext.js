import { useState, createContext } from "react";

export const ProfileContext = createContext(null);

export const ProfileStore = ({
  initializeUser = () => {},
  open,
  setOpen,
  children,
  page = false,
}) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  return (
    <ProfileContext.Provider
      value={{
        initializeUser,
        open,
        setOpen,
        page,
        followers,
        setFollowers,
        following,
        setFollowing,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
