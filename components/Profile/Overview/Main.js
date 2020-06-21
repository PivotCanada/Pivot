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

function Main({ story, posts }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Image image={story.photo} size={150} />
      <Activity profile={story} posts={posts} />
      <Follow profile={story} />
      <Details profile={story} />
      <Chips profile={story} />
      <UserList users={story.followed_by} title={"followers"} />
      <UserList users={story.following} title={"following"} />
    </div>
  );
}

export default Main;
