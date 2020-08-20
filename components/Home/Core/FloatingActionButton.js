import { useEffect, useContext, useState } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import PostAddIcon from "@material-ui/icons/PostAdd";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SearchContext } from "../../../contexts/SearchContext";
// Hooks
import useWidth from "../../../hooks/useWidth";

const Main = () => {
  const { width, setWidth } = useWidth();

  const useStyles = makeStyles((theme) => ({
    floatingActionButton: {
      position: "fixed",
      top: 32,
      boxShadow: "none",

      zIndex: 5,
      fontFamily: "Noto Sans, sans serif",
      textTransform: "none",
      backgroundColor: "#9E00FF",
      color: "white",
      "&:hover": {
        width: 70,
        height: 70,
        top: 26,
        transition: "0.3 ease-in-out",
        backgroundColor: "#9E00FF",
      },
    },
  }));

  const classes = useStyles();

  const { user } = useContext(UserContext);
  const { setShowProfile } = useContext(ModalContext);
  const { setDisplay, setFull, full } = useContext(SearchContext);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Fab
      onClick={() => {
        setDisplay((d) => !d);
        setFull((f) => !f);
        // Router.push(`/profiles/${user._id}`)
      }}
      className={classes.floatingActionButton}
      aria-label="add"
    >
      {full ? (
        <CloseIcon className={classes.addIcon} />
      ) : (
        <PostAddIcon className={classes.addIcon} />
      )}
    </Fab>
  );
};

export default Main;
