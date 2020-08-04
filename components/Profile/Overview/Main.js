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
import Location from "./Location";
import Description from "./Description";
import Modal from "./Modal";
// Utils
import fetchUsers from "../utils/fetchUsers";

function Main({ width, story, posts }) {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      margin: 0,

      marginLeft: 0,
      backgroundColor: "white",
      width: 300,
      paddingTop: 30,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <Modal /> */}
      <Image image={story.photo} size={70} />
      <Activity profile={story} posts={posts} />
      <Follow profile={story} />
      <Details profile={story} />
      <Location profile={story} />
      <Description />
      {/* <Chips profile={story} /> */}
    </div>
  );
}

export default Main;
