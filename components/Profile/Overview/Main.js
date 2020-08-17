import { useState, useEffect, useContext } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// Components
import Follow from "./Follow";
import UserList from "./UserList";
import Activity from "./Activity";
import Image from "./Image";
import Chips from "./Chips";
import Details from "./Details";
import Location from "./Location";
import Description from "./Description";
import Modal from "./Modal";
//Contexts
import { UserContext } from "../../../contexts/UserContext";
// Utils
import fetchUsers from "../utils/fetchUsers";
import { Button } from "@material-ui/core";

function Main({ width, story, posts }) {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      margin: 0,
      left: 0,

      marginLeft: 0,
      backgroundColor: "white",
      width: 300,
      paddingTop: 30,
    },
    link: {
      width: 210,
      fontFamily: "Noto Sans, sans-serif",

      fontSize: 15,
      margin: 0,
      marginTop: 10,
      "&:hover": {
        opacity: 0.6,
        cursor: "pointer",
      },
    },
  }));

  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (story) {
      setProfile(story);
    } else {
      setProfile(user);
    }
  }, [user, story]);

  if (profile) {
    return (
      <div className={classes.wrapper}>
        {/* <Modal /> */}
        <Image image={profile.photo} size={70} />
        {/* <Activity profile={profile} posts={posts} /> */}
        <Follow profile={profile} />
        <Details profile={profile} />
        <Location profile={profile} />

        <Description />
        {/* <Link href={`/profiles/${profile._id}`}>
          <h2 className={classes.link}>Journey</h2>
        </Link>
        <Link href={`/`}>
          <h2 className={classes.link}>Explore</h2>
        </Link> */}
        {/* <Chips profile={story} /> */}
      </div>
    );
  } else {
    return null;
  }
}

export default Main;
