import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import UserList from "../Overview/UserList";
// Utils
import fetchUsers from "../utils/fetchUsers";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    minHeight: "100vh",
  },

  header: {
    textDecoration: "none",
    color: "grey",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    margin: 0,
    marginBottom: 25,
    marginTop: 30,
  },
}));

function Contacts({ story }) {
  const classes = useStyles();

  // TODO : Put into Modal Context ?

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    fetchUsers(story.followed_by, setFollowers);
    fetchUsers(story.following, setFollowing);
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Network</h1>
      <UserList users={followers} title={"followers"} />
      <UserList users={following} title={"following"} />
    </div>
  );
}

export default Contacts;
