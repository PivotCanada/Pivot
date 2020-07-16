import { useState, useEffect, useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Modal from "../Core/Modal";
import Image from "../Overview/Image";
import Details from "../Overview/Details";
// Contexts
import { ProfileContext } from "../Contexts/ProfileContext";
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Utils
import fetchUsers from "../utils/fetchUsers";
import fetchUser from "../../../utils/general/fetchUser";

function Preview({ profile, pageOpen }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      justifyContent: "center",
      borderRadius: 0,
      boxShadow: "0px, 0px",
      marginBottom: 25,
      marginRight: 25,
      minHeight: "100%",
      height: "100%",
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
      height: "100%",
    },
  }));

  const classes = useStyles();
  // const [callback, setCallback] = useState(null);
  // const { initializeUser, page } = useContext(ProfileContext);
  const { user } = useContext(UserContext);
  const { setId } = useContext(ModalContext);
  const [same, setSame] = useState(false);

  // const [displayType, setDisplayType] = useState("modal");

  // useEffect(() => {
  //   if (user._id === profile._id) {
  //     setSame(true);
  //   }
  // }, []);

  // const checkModal = (displayType) => displayType === "modal";

  return (
    <div className={classes.card}>
      {/* <Modal open={open} setOpen={setOpen} fetch={user._id} /> */}

      <div
        onClick={async () => {
          if (same) {
            Router.push(`/profiles/${profile._id}`);
          } else {
            setId(profile._id);
          }
        }}
        className={classes.wrapper}
      >
        <Image image={profile.photo} size={55} />
        <Details profile={profile} small={true} />
      </div>
    </div>
  );
}

export default Preview;
