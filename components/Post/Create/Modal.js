import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { CreateContext } from "../../../contexts/CreateContext";
import { useEffect, useContext, useState, useRef } from "react";
import { UserContext } from "../../../contexts/UserContext";

import Create from "./MainProfile";

import Main from "./Main";

// import useWidth from "../../hooks/useWidth";

export default function TransitionsModal(props) {
  // let width = useWidth();

  const useStyles = makeStyles((theme) => ({
    dialog: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100vw",
      minHeight: "100vh",
    },

    closeButton: {
      width: "50px",
      height: "50px",
      // position: "fixed",
      // top: `6.5px`,
      // right: "5px",
    },
    icon: {
      width: "60px",
      height: "auto",
      // position: "fixed",
      // top: `22.5px`,
      marginLeft: "10px",
    },
    action: {
      zIndex: 2,
      display: "flex",
      justifyContent: "space-between",
      minWidth: "100%",
      height: "65px",
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
      minHeight: 400,
    },
  }));

  const classes = useStyles();

  const { open, setOpen } = useContext(CreateContext);
  const { user } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      scroll="body"
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogActions className={classes.action}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <div className={classes.wrapper}>
        <Create />
      </div>
    </Dialog>
  );
}
