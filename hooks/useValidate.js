import Cookie from "js-cookie";
import Router from "next/router";
import validateToken from "../utils/authentication/validateToken";
import fetchUser from "../utils/general/fetchUser";

function useValidate(setUser, setAuthenticated, setLoading) {
  const validateSession = async () => {
    setLoading(true);
    let token = Cookie.get("token");
    if (token !== undefined) {
      await validateToken(token).then(async (response) => {
        console.log(response);
        status = response.status;
        if (status === "success") {
          await fetchUser(response.data.userId).then((response) => {
            setUser(response.data);
            setAuthenticated(true);
            setLoading(false);
          });
        } else {
          setUser(null);
          setAuthenticated(false);
          setLoading(false);
          Cookie.remove("token");
        }
      });
    } else {
      setUser(null);
      setAuthenticated(false);
      setLoading(false);
    }
  };

  return { validateSession };
}

export default useValidate;
