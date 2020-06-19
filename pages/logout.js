import Cookie from "js-cookie";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Router from "next/router";

function useLogout() {
  const { setUser, setAuthenticated, setToken } = useContext(UserContext);

  useEffect(() => {
    Cookie.remove("token");
    setUser(null);
    setAuthenticated(false);
    setToken(null);
    Router.push("/");
  }, []);

  return null;
}

export default useLogout;
