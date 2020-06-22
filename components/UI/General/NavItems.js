import React, { useContext, useEffect } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
// Hooks
import useLanguage from "../../../hooks/useLanguage";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    color: "black",
    fontFamily: "Open Sans, sans serif",
    fontWeight: 700,
    fontSize: 11,
    textAlign: "center",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  button: {
    textTransform: "none",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    fontWeight: 700,
    fontSize: 12,
    fontFamily: "Open Sans, sans serif",
  },
  menuButton: {
    color: "black",
    marginTop: 2,
  },
}));

const NavItems = ({ setOpen }) => {
  const classes = useStyles();
  const { authenticated } = useContext(UserContext);
  const { setShowOnboard, setShowLogin, setShowProfile } = useContext(
    ModalContext
  );
  const { keys, truthy, changeLanguage } = useLanguage({
    language: {
      english: "Français",
      french: "English",
    },
    discover: {
      english: "Discover",
      french: "Decouvrir",
    },
    journey: {
      english: "My Journey",
      french: "Mon Histoire",
    },
    actionCall: {
      english: "Get Started",
      french: "Debut",
    },
  });

  return (
    <div
      style={{ width: authenticated ? 300 : 350 }}
      className={classes.wrapper}
    >
      <h3 onClick={() => changeLanguage()} className={classes.link}>
        {truthy(keys.language)}
      </h3>

      <Link href={"/"}>
        <h3 className={classes.link}>{keys.discover}</h3>
      </Link>

      <h3
        onClick={() => {
          if (authenticated) {
            setShowProfile(true);
          } else {
            setShowOnboard(true);
            setShowLogin(true);
          }
        }}
        className={classes.link}
      >
        {truthy(keys.journey)}
      </h3>

      {authenticated ? (
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
        <Button
          className={classes.button}
          onClick={() => {
            setShowOnboard(true);
            setShowLogin(true);
          }}
          variant="contained"
          color="primary"
        >
          {truthy(keys.actionCall)}
        </Button>
      )}
    </div>
  );
};

export default NavItems;
