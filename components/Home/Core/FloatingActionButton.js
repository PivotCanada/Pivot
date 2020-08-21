import { useEffect, useContext, useState } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import PostAddIcon from "@material-ui/icons/PostAdd";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { CreateContext } from "../../../contexts/CreateContext";
// Hooks
import useWidth from "../../../hooks/useWidth";

const Main = () => {
  const { width, setWidth } = useWidth();

  const useStyles = makeStyles((theme) => ({
    floatingActionButton: {
      background: "#9E00FF",
      position: "fixed",
      top: 32,
      zIndex: 5,
      fontFamily: "Noto Sans, sans serif",
      textTransform: "none",
      border: "3px solid",
      borderColor: "white",
      boxShadow: "none",
      width: 70,
      height: 70,
      borderRadius: 5,
    },
    icon: {
      color: "white",
    },
  }));

  const classes = useStyles();

  const { user } = useContext(UserContext);
  const { setShowProfile } = useContext(ModalContext);
  const { setOpen } = useContext(CreateContext);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (user) {
    return (
      <Fab
        onClick={() => {
          setOpen(true);
        }}
        className={classes.floatingActionButton}
        aria-label="add"
      >
        <PostAddIcon className={classes.icon} />
      </Fab>
    );
  } else {
    return null;
  }
};

export default Main;
