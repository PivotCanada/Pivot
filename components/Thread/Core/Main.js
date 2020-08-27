import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "../../Post/Core/Card";
import Create from "../../Post/Create/MainProfile";
import Container from "../../Post/Core/Container";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Utils
import { fetchPosts } from "../utils/fetchPosts";
import { fetchPost } from "../utils/fetchPost";
// Hooks
import useWidth from "../../../hooks/useWidth";

const Main = ({postId = null}) => {
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
  const { id, setId } = useContext(ModalContext);
  const [children, setChildren] = useState([]);
  const [post, setPost] = useState({});

  // const fetchPosts = async () => {
  //   await fetchUserPosts(story._id).then((response) => {
  //     if (response.status === "success") {
  //       setPosts(response.data.reverse());
  //     }
  //   });
  // };

  const initializeData = async (id) => {
    await fetchPost(id).then(async (response) => {
      console.log(response);
      setPost(response.data);
      // TODO : Fix this
      setChildren([]);
      await fetchPosts(response.data.children, setChildren);
    });
  };

  useEffect(() => {
   initializeData( postId ? postId : id)
    // setWidth(window.innerWidth);

    console.log(postId)
  }, [id, postId]);

  // useEffect(() => {
  //   setContent("story");
  //   fetchPosts();
  //   fetchLikes();
  // }, [story]);

  // useEffect(() => {
  //   console.log(children);
  // }, [children]);

  const isEmpty = (object) => Object.keys(object).length === 0;

  if (!isEmpty(post)) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Card post={post} displayLink={false} />
          {user ? <Create role={"child"} context={post._id} /> : null}

          <Container data={children} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Main;
