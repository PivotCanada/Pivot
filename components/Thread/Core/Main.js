import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "../../Post/Core/Card";
import Create from "../../Post/Create/Main";
import Container from "../../Post/Core/Container";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
// Utils
import { fetchPosts } from "../utils/fetchPosts";
// Hooks
import useWidth from "../../../hooks/useWidth";
import { ModalContext } from "../../../contexts/ModalContext";

const Main = ({ post }) => {
  // TODO : Rework if changing Profile page ...

  const { width, setWidth } = useWidth();

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: width < 600 ? "column" : "column",
      alignItems: width < 600 ? "center" : "center",
      width: "100%",
      minHeight: "100%",
      marginTop: 20,
    },

    container: {
      right: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      maxWidth: 800,
    },
  }));

  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [children, setChildren] = useState([]);

  // const fetchPosts = async () => {
  //   await fetchUserPosts(story._id).then((response) => {
  //     if (response.status === "success") {
  //       setPosts(response.data.reverse());
  //     }
  //   });
  // };

  useEffect(() => {
    console.log(post);
    fetchPosts(post.children, setChildren);
    setWidth(window.innerWidth);
  }, [post]);

  // useEffect(() => {
  //   setContent("story");
  //   fetchPosts();
  //   fetchLikes();
  // }, [story]);

  useEffect(() => {
    console.log(children);
  }, [children]);

  if (post) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Create role={"child"} context={post._id} />
          <Card post={post} displayLink={false} />
          <Container data={children} />
        </div>
      </div>
    );
  }
};

export default Main;
