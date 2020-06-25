import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Modal from "../Core/Modal";
import Image from "../Overview/Image";
import Details from "../Overview/Details";
// Contexts
import { ProfileContext } from "../Contexts/ProfileContext";
// Utils
import { format } from "./utils/format";

function Preview({ user, pageOpen }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      justifyContent: "center",
      borderRadius: 0,
      boxShadow: "0px, 0px",
      marginBottom: 25,
      marginRight: 25,
    },

    wrapper: {
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px, 0px",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
      minHeight: "100%",
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [callback, setCallback] = useState(null);
  // const { initializeUser } = useContext(ProfileContext);

  // const [displayType, setDisplayType] = useState("modal");

  useEffect(() => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const checkModal = (displayType) => displayType === "modal";

  return (
    <div className={classes.card}>
      <Modal open={open} setOpen={setOpen} fetch={user._id} />

      <div
        onClick={async () => {
          // if (initializeUser) {
          //   await initializeUser(user._id);
          // } else {
          setOpen(true);
          // }
        }}
        className={classes.wrapper}
      >
        <Image image={user.photo} size={55} />
        <Details profile={user} small={true} />
      </div>
    </div>
  );
}

export default Preview;
