import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// Components
// import Main from "./Main";
import Main from "../../Thread/Core/Main";
import ModalNav from "./ModalNav";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
// Utils
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

const Modal = () => {
  const classes = useStyles();
  const { open = false, setOpen, id } = useContext(ModalContext);
  // TODO : Put this in Modal context ?
  const [profile, setProfile] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const initializeUser = async (id) => {
    if (id) {
      await fetchUser(id).then(async (response) => {
        if (response.status === "success") {
          await setProfile(response.data);
        }
      });
    }
  };

  useEffect(() => {
    initializeUser(id);
  }, [id]);

  return (
    <Dialog
      scroll="body"
      open={open}
      fullWidth={true}
      className={classes.dialog}
      maxWidth={"md"}
      onClose={handleClose}
    >
      <DialogActions className={classes.dialogActions}>
        <IconButton className={classes.close} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <ModalNav />
      <Main />
      {/* <Main story={profile} /> */}
    </Dialog>
  );
};

export default Modal;
