import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ModalContext } from "../../contexts/ModalContext";
import { useEffect, useContext, useState, useRef } from "react";
import useWitdh from "../../hooks/useWidth";
import Form from "./Form";

import Button from "@material-ui/core/Button";

// import useWidth from "../../hooks/useWidth";

export default function TransitionsModal(props) {
  const [fullScreen, setFullScreen] = useState(false);
  const [top, setTop] = useState(10);
  const [onboard, setOnboard] = useState(true);

  const { width, setWidth } = useWitdh();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // let width = useWidth();

  const useStyles = makeStyles((theme) => ({
    dialog: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
      minHeight: "100%",
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
      height: "65px",
    },
  }));

  const classes = useStyles();
  const Ref = useRef(0);
  const { showOnboard, setShowOnboard, setShowLogin } = useContext(
    ModalContext
  );

  const handleOpen = () => {
    setShowLogin(true);
    setShowOnboard(true);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowOnboard(false);
  };

  useEffect(() => {}, [showOnboard]);

  useEffect(() => {
    console.log(window.scrollY);
  }, []);

  return (
    <Dialog
      scroll="body"
      fullWidth={true}
      fullScreen={width < 800}
      maxWidth={"sm"}
      open={showOnboard}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogActions className={classes.action}>
        <img
          ref={Ref}
          className={classes.icon}
          src="https://pivot.nyc3.digitaloceanspaces.com/Logo.svg"
          alt="icon"
        />
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <Form />
    </Dialog>
  );
}
