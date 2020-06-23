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
// Utils
import { fetchUserPosts } from "../utils/fetchUserPosts";
import { sameUser } from "../utils/sameUser";
import { fetchUserLikes } from "../utils/fetchUserLikes";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: 25,
  },

  container: {
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "50%",
    marginLeft: "7%",
  },
}));

const Main = ({ story }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const identical = sameUser(user, story);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [content, setContent] = useState("");

  const initialContent = () => {
    if (identical) {
      setContent("posts");
    } else {
      setContent("story");
    }
  };

  const fetchLikes = async () => {
    setLikes(await fetchUserLikes(user.likes));
  };

  const fetchPosts = async () => {
    await fetchUserPosts(story._id).then((response) => {
      if (response.status === "success") {
        setPosts(response.data);
      }
    });
  };

  useEffect(() => {
    fetchPosts();
    fetchLikes();
    initialContent();
  }, []);

  return (
    <div className={classes.wrapper}>
      <Overview story={story} posts={posts.length} />
      <div className={classes.container}>
        <ButtonGroup setContent={setContent} />
        {identical ? <CreatePost /> : null}
        <Content story={story} content={content} posts={posts} likes={likes} />
      </div>
    </div>
  );
};

export default Main;
