import React, { useContext, useEffect } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Components
import ProfileLink from "./ProfileLink";

// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
// Hooks
import useLanguage from "../../../hooks/useLanguage";
import useWidth from "../../../hooks/useWidth";

const NavItems = ({ setOpen }) => {
  const { width, setWidth } = useWidth();
  const { user, authenticated, loading } = useContext(UserContext);

  const useStyles = makeStyles(() => ({
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      margin: 0,
    },

    link: {
      display: width < 600 ? "none" : "flex",
      color: "white",
      fontFamily: "Poppins, sans serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
      marginRight: 25,
    },
    actionLink: {
      display: width < 600 ? "none" : "flex",
      color: "black",
      fontFamily: "Poppins, sans serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
      marginRight: 25,
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: "white",

      height: 65,
      width: 200,
    },
    menuButton: {
      color: "black",
      marginTop: 2,
    },
  }));

  const classes = useStyles();

  const { setShowOnboard, setShowLogin } = useContext(ModalContext);
  const { keys, truthy, changeLanguage } = useLanguage({
    language: {
      english: "Français",
      french: "English",
    },
    about: {
      english: "About",
      french: "à Propos",
    },
    discover: {
      english: "Discover",
      french: "Decouvrir",
    },
    journey: {
      english: "Sign up",
      french: "Continue Mon Voyage",
    },
  });

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {}, [user, authenticated, loading]);

  if (loading) {
    return null;
  } else {
    return (
      <div className={classes.wrapper}>
        <ProfileLink width={width} keys={keys} />
        {/* <h3 onClick={() => changeLanguage()} className={classes.link}>
          {truthy(keys.language)}
        </h3> */}
        <Link href={"/"}>
          <h3 className={classes.link}>{keys.discover}</h3>
        </Link>
        <Link href={"/about"}>
          <h3 className={classes.link}>{keys.about}</h3>
        </Link>
        {/* <Search /> */}
        {authenticated && !loading ? (
          <IconButton
            onClick={() => setOpen(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Link href={"/signup"}>
            <div className={classes.button}>
              <h3 className={classes.actionLink}>{truthy(keys.journey)}</h3>
            </div>
          </Link>
        )}
      </div>
    );
  }
};

export default NavItems;
