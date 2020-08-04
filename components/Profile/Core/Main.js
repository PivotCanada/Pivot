import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import ButtonGroup from "../Content/ButtonGroup";
import CreatePost from "../../Post/Create/MainProfile";
import Overview from "../Overview/Main";
import Content from "../Content/Main";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Utils
import { fetchUserPosts } from "../utils/fetchUserPosts";
import { sameUser } from "../utils/sameUser";
import { fetchUserLikes } from "../utils/fetchUserLikes";
// Hooks
import useWidth from "../../../hooks/useWidth";

const Main = ({ story, initialContent = "story" }) => {
  // TODO : Rework if changing Profile page ...

  const { width, setWidth } = useWidth();

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      width: "100%",
      minHeight: "100%",
    },

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",

      marginLeft: 325,
      marginTop: 25,
    },
  }));

  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { setIds } = useContext(ModalContext);

  // TODO : Put this in Context ?

  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [content, setContent] = useState(initialContent);

  const fetchLikes = async () => {
    setLikes(await (await fetchUserLikes(story.likes)).reverse());
  };

  const extractIds = (list) => list.map((obj) => obj._id);

  const fetchPosts = async () => {
    await fetchUserPosts(story._id).then((response) => {
      if (response.status === "success") {
        setIds(extractIds(response.data));
        setPosts(response.data.reverse());
      }
    });
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchLikes();
  }, [story]);

  if (story) {
    // console.log(story);
    return (
      <div className={classes.wrapper}>
        <Overview width={width} story={story} posts={posts.length} />
        <div className={classes.container}>
          {/* <ButtonGroup setContent={setContent} /> */}
          {/* TODO : Change if we rework Profile */}
          {/* {sameUser(user, story) ? (
            <CreatePost fetchPosts={fetchPosts} />
          ) : null} */}
          <Content
            story={story}
            content={content}
            fetchLikes={fetchLikes}
            fetchPosts={fetchPosts}
            posts={posts}
            likes={likes}
          />
        </div>
      </div>
    );
  }
};

export default Main;
