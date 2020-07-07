import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// Components
import Main from "./Main";
import ModalNav from "./ModalNav";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ProfileStore } from "../Contexts/ProfileContext";
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

const Modal = ({ data, open, setOpen, story, fetch = false }) => {
  const { user } = useContext(UserContext);

  const { width, setWidth } = useWidth();
  const [profile, setProfile] = useState({});
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(true);
  const [index, setIndex] = useState(0);

  const classes = useStyles();

  // TODO : each modal is referencing its data prop, is it making m copies if there are m modals?

  const createIds = async () => data.map((i) => i._id);

  const getIndex = async (profile) => {
    if (data) {
      const ids = data.map((i) => i._id);
      const i = ids.indexOf(profile._id);
      setIndex(i);
      setNext(i !== data.length - 1);
      setPrevious(i !== 0);
    }
  };

  const nextUser = () => {
    const next = data[index + 1];

    setProfile(next);
  };

  const previousUser = () => {
    const prev = data[index - 1];
    setProfile(prev);
  };

  // nextUser();

  const initializeUser = async (fetch) => {
    if (fetch) {
      await fetchUser(fetch).then(async (response) => {
        if (response.status === "success") {
          await setProfile(response.data);
        }
      });
    } else {
      setProfile(story);
    }
  };

  useEffect(() => {
    initializeUser(fetch);
  }, [fetch]);

  useEffect(() => {
    console.log("------------------");
    console.log(data);
    console.log(index);
    console.log(profile);
  }, [index]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    getIndex(profile);
  }, [profile]);

  const handleClose = () => {
    setOpen(false);
  };

  if (profile) {
    return (
      <ProfileStore
        initializeUser={initializeUser}
        open={open}
        setOpen={setOpen}
        page={true}
      >
        <Dialog
          scroll="body"
          open={open}
          fullWidth={true}
          className={classes.dialog}
          maxWidth={"sm"}
          onClose={handleClose}
        >
          <DialogActions className={classes.dialogActions}>
            <h2 className={classes.header}>
              {sameUser(user, profile) ? "My Journey: " : null}
              {profile.business}
            </h2>
            <IconButton className={classes.close} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogActions>
          <ModalNav
            next={next}
            previous={previous}
            nextUser={nextUser}
            previousUser={previousUser}
          />
          <Main story={profile} />
        </Dialog>
      </ProfileStore>
    );
  } else {
    return null;
  }
};

export default Modal;
