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
      width: "50vw",
      marginTop: profile ? 0 : 200,
      marginBottom: 75,
    },
  }));

  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (callback) {
      callback().then((response) => {

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
