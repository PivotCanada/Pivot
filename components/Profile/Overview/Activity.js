import { useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 20,
    width: 210,
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 400,
    fontSize: 11,
    color: "grey",
    textAlign: "center",
    margin: 0,
  },
  value: {
    fontFamily: "Noto Sans, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: "black",
    textAlign: "center",
    margin: 0,
  },
}));

const Activity = ({ profile, posts }) => {
  const classes = useStyles();

  useEffect(() => {}, [profile]);

  if (profile) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <p className={classes.value}>{profile.following.length}</p>
          <p className={classes.header}>following</p>
        </div>
        <div className={classes.container}>
          <p className={classes.value}>{posts}</p>
          <p className={classes.header}>posts</p>
        </div>
        <div className={classes.container}>
          <p className={classes.value}>{profile.followed_by.length}</p>
          <p className={classes.header}>followers</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Activity;
