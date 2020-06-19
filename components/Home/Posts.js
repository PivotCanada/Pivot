import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import PostCard from "../Post/Main/Card";
// Utils
import { fetchAllPosts } from "./utils/fetchAllPosts";
// Hooks
import useWitdh from "../../hooks/useWidth";

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

const Main = ({ display, posts }) => {
  const classes = useStyles();
  //   const [posts, setPosts] = useState([]);

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  //   useEffect(() => {
  //     fetchAllPosts().then((response) => {
  //       console.log(response);
  //       setPosts(response.data);
  //     });
  //   }, []);

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      {posts.map((post) => {
        return <PostCard display={display} key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Main;
