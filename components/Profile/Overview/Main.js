import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Follow from "./Follow";
import UserList from "./UserList";
import Activity from "./Activity";
import Image from "./Image";
import Chips from "./Chips";
import Details from "./Details";
import Modal from "./Modal";
// Utils
import fetchUsers from "../utils/fetchUsers";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    margin: 0,
    padding: 0,
    marginLeft: 0,
  },
}));

function Main({ width, story, posts }) {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      width: 250,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      margin: 0,
      padding: 0,
      marginLeft: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <Modal /> */}
      <Image image={story.photo} size={150} />
      <Activity profile={story} posts={posts} />
      <Follow profile={story} />
      <Details profile={story} />
      <Chips profile={story} />
    </div>
  );
}

export default Main;
