import React, { useState, useContext } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// Components
import SideDrawer from "./SideDrawer";
import NavItems from "./NavItems";
import ActionButtons from "./ActionButtons";
// Contexts
import { UserContext } from "../../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    width: "100%",
    flexGrow: 1,
    position: "fixed",
    height: 65,
    padding: 0,

    paddingBottom: 1,
    // boxShadow: "0px 2px 6px 2px rgba(194,194,194,1)",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 0,
    height: "100%",
    width: "100%",
  },
  icon: {
    width: 25,
    height: "auto",
    marginLeft: 20,

    "&:hover": {
      opacity: 0.6,
      cursor: "pointer",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <SideDrawer open={open} setOpen={setOpen} anchor={"right"} />
        <Toolbar className={classes.toolbar}>
          <Link href="/landing">
            <img
              className={classes.icon}
              src="https://pivot.nyc3.digitaloceanspaces.com/WhiteVector.svg"
              alt="icon"
            />
          </Link>
          <NavItems setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
