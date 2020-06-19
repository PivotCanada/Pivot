import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { useEffect, useContext, useState, useRef } from "react";
import Main from "./Main";
import MobileMain from "./MobileMain";
import useWitdh from "../../hooks/useWidth";

import Button from "@material-ui/core/Button";

// import useWidth from "../../hooks/useWidth";

export default function TransitionsModal({ open, setOpen, story }) {
  // let width = useWidth();

  const { width, setWidth } = useWitdh();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  const useStyles = makeStyles((theme) => ({
    dialog: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },

    closeButton: {
      width: "50px",
      height: "50px",
      marginTop: 1,
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
    storyTitle: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Noto Sans, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      textAlign: "center",
      margin: 0,
      marginLeft: 10,
      marginTop: 0,
    },
  }));

  const { user } = useContext(UserContext);
  const classes = useStyles();
  const Ref = useRef(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      scroll="paper"
      open={open}
      fullScreen={width < 800}
      fullWidth={width > 800}
      className={classes.dialog}
      maxWidth={"lg"}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogActions
        style={{
          position: width < 800 ? "fixed" : "none",
          left: width < 800 ? 0 : null,
          top: width < 800 ? 0 : null,
        }}
        className={classes.action}
      >
        {/* <img
          ref={Ref}
          className={classes.icon}
          src="https://pivot.nyc3.digitaloceanspaces.com/Logo.svg"
          alt="icon"
        /> */}
        {user !== null && user._id === story._id ? (
          <h2 className={classes.storyTitle}>My Journey : {story.business}</h2>
        ) : (
          <h2 className={classes.storyTitle}>{story.business}</h2>
        )}

        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      {width > 800 ? <Main story={story} /> : <MobileMain story={story} />}
    </Dialog>
  );
}
