import { useEffect, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Main/Card";
// Utils
// Hooks

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: 40,
    marginBottom: 75,
    width: "90vw",
    overflowX: "hidden",
  },
}));

const Main = ({ display, callback }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    callback().then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      {posts.map((post) => {
        return <Card display={display} key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Main;
