import React, { useContext } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";

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

  return (
    <div
      style={{ width: authenticated ? 250 : 300 }}
      className={classes.wrapper}
    >
      <Link href={"/"}>
        <h3 className={classes.link}>Discover</h3>
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
        My Journey
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
          Get Started
        </Button>
      )}
    </div>
  );
};

export default NavItems;
