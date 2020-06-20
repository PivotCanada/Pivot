import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// Components
// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
// Hooks
import useWidth from "../../hooks/useWidth";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const Main = () => {
  const classes = useStyles();

  const { width, setWidth } = useWidth();
  const { user } = useContext(UserContext);
  const { setShowProfile } = useContext(ModalContext);

  // TODO : Is it neccessary to use hook here, rather than pass it down ?

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width > 950) {
    return user ? (
      <Fab
        onClick={() => setShowProfile(true)}
        className={classes.floatingActionButton}
        color="primary"
        aria-label="add"
      >
        <AccountCircleIcon className={classes.addIcon} />
      </Fab>
    ) : null;
  } else {
    return null;
  }
};

export default Main;
