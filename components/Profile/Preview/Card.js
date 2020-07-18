import { useState, useEffect, useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Image from "../Overview/Image";
import Details from "../Overview/Details";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";

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

function Preview({ profile }) {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { setId, open, setOpen } = useContext(ModalContext);
  const [same, setSame] = useState(false);

  useEffect(() => {
    setSame(user._id === profile._id);
  }, []);

  return (
    <div className={classes.card}>
      <div
        onClick={async () => {
          if (same) {
            Router.push(`/profiles/${profile._id}`);
          } else {
            setId(profile._id);
            if (!open) {
              setOpen(true);
            }
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
