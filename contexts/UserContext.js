import { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserStore = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        authenticated,
        token,
        setUser,
        setAuthenticated,
        setToken,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
