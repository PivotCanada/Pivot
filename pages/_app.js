import { useEffect, useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
// Material UI
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
// GA
import * as gtag from "../lib/gtag";
// Context
import { ModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [showOnboard, setShowOnboard] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  if (loading) {
    return null;
  } else {
    return (
      <React.Fragment>
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
          <ModalContext.Provider
            value={{
              showOnboard,
              setShowOnboard,
              showLogin,
              setShowLogin,
              showEdit,
              setShowEdit,
              showDelete,
              setShowDelete,
              showProfile,
              setShowProfile,
              showCreate,
              setShowCreate,
            }}
          >
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </ModalContext.Provider>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
