import { useEffect, useContext, useState } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
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
      bottom: width < 600 ? 20 : 40,
      right: width < 600 ? 20 : 40,
      fontFamily: "Noto Sans, sans serif",
      textTransform: "none",
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
      color="primary"
      aria-label="add"
    >
      {full ? (
        <CloseIcon className={classes.addIcon} />
      ) : (
        <SearchIcon className={classes.addIcon} />
      )}
    </Fab>
  );
};

export default Main;
