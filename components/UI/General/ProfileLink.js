import React, { useContext, useEffect } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
// Comonents
import Image from "../../Profile/Overview/Image";

const ProfileLink = ({ width, keys }) => {
  const useStyles = makeStyles(() => ({
    link: {
      display: width < 600 ? "none" : "flex",
      // marginRight: 25,

      color: "black",
      fontFamily: "Open Sans, sans serif",
      fontWeight: 700,
      fontSize: 11,
      textAlign: "center",
    },

    wrapper: {
      display: "flex",

      alignItems: "center",

      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
  }));

  const classes = useStyles();
  const { user, authenticated } = useContext(UserContext);
  const { setShowOnboard, setShowLogin } = useContext(ModalContext);

  const complete = () =>
    user.business && user.location && user.website && user.industry;

  if (user && complete()) {
    return (
      <Link href={`/profiles/${user._id}`}>
        <div className={classes.wrapper}>
          <Image right={0} image={user.photo} size={25} />

          {/* <h3 className={classes.link}>
            {user.firstname} {user.lastname}
          </h3> */}
        </div>
      </Link>
    );
  } else {
    return null;
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
