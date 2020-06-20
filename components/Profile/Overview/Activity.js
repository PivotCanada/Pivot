import { useRef, useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import StoreIcon from "@material-ui/icons/Store";
import Chip from "@material-ui/core/Chip";
// Components
import Follow from "./Follow";
import Followers from "./Followers";
import Following from "./Following";

const useStyles = makeStyles((theme) => ({
  followBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  followBoxWrapper: {
    display: "flex",
    marginTop: 20,
    width: 250,
    justifyContent: "space-between",
  },
  followBoxHeader: {
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 400,
    fontSize: 11,
    color: "grey",
    textAlign: "center",
    margin: 0,
  },
  followBoxText: {
    fontFamily: "Noto Sans, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: "black",
    textAlign: "center",
    margin: 0,
  },
}));

function Activity({ story, posts }) {
  const classes = useStyles();

  return (
    <div className={classes.followBoxWrapper}>
      <div className={classes.followBox}>
        <p className={classes.followBoxText}>{story.following.length}</p>
        <p className={classes.followBoxHeader}>following</p>
      </div>
      <div className={classes.followBox}>
        <p className={classes.followBoxText}>{posts.length}</p>
        <p className={classes.followBoxHeader}>posts</p>
      </div>
      <div className={classes.followBox}>
        <p className={classes.followBoxText}>{story.followed_by.length}</p>
        <p className={classes.followBoxHeader}>followers</p>
      </div>
    </div>
  );
}

export default Activity;
