import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// Components
import Main from "./Main";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ProfileContext } from "../Contexts/ProfileContext";
// Hooks
import useWidth from "../../../hooks/useWidth";
// Utils
import { sameUser } from "../utils/sameUser";
import fetchUser from "../../../utils/general/fetchUser";

const useStyles = makeStyles((theme) => ({
  dialog: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  close: {
    width: "50px",
    height: "50px",
    marginTop: 1,
  },
  dialogActions: {
    zIndex: 2,
    justifyContent: "space-between",
    width: "100%",
    height: 65,
    backgroundColor: "white",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100vw",
  },
  header: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    margin: 0,
    marginLeft: 10,
    marginTop: 0,
  },
  arrowForwardIosIcon: {
    position: "fixed",
    top: "50%",
    right: "5%",
    color: "white",
  },
  arrowBackIosIcon: {
    position: "fixed",
    top: "50%",
    left: "5%",
    color: "white",
  },
}));

const ModalNav = ({ nextUser, previousUser, next, previous }) => {
  const { page } = useContext(ProfileContext);

  const classes = useStyles();

  // TODO : each modal is referencing its data prop, is it making m copies if there are m modals?

  // nextUser();

  return (
    <div>
      {next ? (
        <IconButton
          className={classes.arrowForwardIosIcon}
          onClick={() => {
            nextUser();
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      ) : null}
      {previous ? (
        <IconButton
          className={classes.arrowBackIosIcon}
          onClick={() => {
            previousUser();
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      ) : null}
    </div>
  );
};

export default ModalNav;
