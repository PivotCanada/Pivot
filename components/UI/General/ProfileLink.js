import React, { useContext, useEffect } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";

const useStyles = makeStyles(() => ({
  link: {
    color: "black",
    fontFamily: "Open Sans, sans serif",
    fontWeight: 700,
    fontSize: 11,
    textAlign: "center",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
}));

const ProfileLink = ({ keys }) => {
  const classes = useStyles();
  const { user, authenticated } = useContext(UserContext);
  const { setShowOnboard, setShowLogin } = useContext(ModalContext);

  const onSubmit = () => {
    setShowOnboard(true);
    setShowLogin(true);
  };

  if (authenticated) {
    return (
      <Link href={`/profiles/${user._id}`}>
        <h3 className={classes.link}>{keys.journey}</h3>
      </Link>
    );
  } else {
    return (
      <h3 onClick={onSubmit} className={classes.link}>
        {keys.journey}
      </h3>
    );
  }
};

export default ProfileLink;

// <h3
//     onClick={() => {
//       if (authenticated) {
//         setShowProfile(true);
//       } else {
//         setShowOnboard(true);
//         setShowLogin(true);
//       }
//     }}
//     className={classes.link}
//   >
//     {truthy(keys.journey)}
//   </h3>
