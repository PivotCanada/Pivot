import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";

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
  const { user } = useContext(UserContext);
  const { setShowProfile } = useContext(ModalContext);

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
};

export default Main;
