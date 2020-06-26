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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    margin: 0,
    padding: 0,
    marginLeft: "5%",
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
      marginLeft: width < 600 ? 0 : "5%",
    },
  }));

  const classes = useStyles();
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const format = () => {
    setFollowers(story.followed_by.slice(0, 6));
    setFollowing(story.following.slice(0, 6));
  };

  useEffect(() => {
    format();
  }, [story]);

  return (
    <div className={classes.wrapper}>
      <Image image={story.photo} size={150} />
      <Activity profile={story} posts={posts} />
      <Follow profile={story} />
      <Details profile={story} />
      <Chips profile={story} />
      {width > 600 ? (
        <UserList users={followers} title={"followers"} width={250} />
      ) : null}
      {width > 600 ? (
        <UserList users={following} title={"following"} width={250} />
      ) : null}
    </div>
  );
}

export default Main;
