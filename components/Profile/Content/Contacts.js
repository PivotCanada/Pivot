// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import UserList from "../Overview/UserList";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
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

function Contacts({ story, pageOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Contacts</h1>
      <UserList
        pageOpen={pageOpen}
        users={story.followed_by}
        title={"followers"}
      />
      <UserList
        pageOpen={pageOpen}
        users={story.following}
        title={"following"}
      />
    </div>
  );
}

export default Contacts;
