import { useEffect } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
// Material UI
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
// GA
import * as gtag from "../lib/gtag";
// Context
import { ModalStore } from "../contexts/ModalContext";
import { UserStore } from "../contexts/UserContext";
import { LanguageStore } from "../contexts/LanguageContext";
import { CreateStore } from "../contexts/CreateContext";
import { FormStore } from "../contexts/FormContext";
import { FilterStore } from "../contexts/FilterContext";
import { ProfileModalStore } from "../contexts/ProfileModalContext";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <React.Fragment>
      <FilterStore>
        <ProfileModalStore>
          <LanguageStore>
            <ModalStore>
              <UserStore>
                <CreateStore>
                  <FormStore>
                    <ThemeProvider theme={theme}>
                      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                      <CssBaseline />
                      <Component {...pageProps} />
                    </ThemeProvider>
                  </FormStore>
                </CreateStore>
              </UserStore>
            </ModalStore>
          </LanguageStore>
        </ProfileModalStore>
      </FilterStore>
    </React.Fragment>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
