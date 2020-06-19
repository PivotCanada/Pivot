import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import { ModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    width: "100vw",
    flexGrow: 1,
    position: "fixed",
    height: 65,
    paddingBottom: 1,
    boxShadow: "0px 2px 6px 2px rgba(194,194,194,1)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  menuButton: {
    color: "black",
  },
  title: {
    flexGrow: 1,
  },

  rightWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  navLink: {
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
  icon: {
    width: "60px",
    height: "auto",
    // position: "fixed",
    // top: `22.5px`,
    marginLeft: "10px",
    "&:hover": {
      opacity: 0.6,
      cursor: "pointer",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState("right");
  const { setShowOnboard, setShowLogin, setShowProfile } = useContext(
    ModalContext
  );
  const { authenticated } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <SideDrawer open={open} setOpen={setOpen} anchor={anchor} />
        <Toolbar className={classes.toolbar}>
          <Link href="/landing">
            <img
              className={classes.icon}
              src="https://pivot.nyc3.digitaloceanspaces.com/Logo.svg"
              alt="icon"
            />
          </Link>

          <div
            style={{ width: authenticated ? 250 : 300 }}
            className={classes.rightWrapper}
          >
            <Link href={"/"}>
              <h3 className={classes.navLink}>Discover</h3>
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
              className={classes.navLink}
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
