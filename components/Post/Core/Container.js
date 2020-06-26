import { useEffect, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Card";

const Main = ({ display = true, callback, data, profile }) => {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      marginTop: profile ? 0 : 40,
      marginBottom: 75,
      width: profile ? "100%" : "90vw",
    },
  }));

  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (callback) {
      callback().then((response) => {
        console.log(response);
        setPosts(response.data);
      });
    } else {
      setPosts(data);
    }
  }, [data]);

  useEffect(() => {}, [posts]);
  if (display) {
    return (
      <div className={classes.root}>
        {posts.map((post) => {
          return <Card key={post._id} post={post} />;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Main;
