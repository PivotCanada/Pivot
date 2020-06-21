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
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("story");

  const fetchPosts = async (id) => {
    await fetchUserPosts(id).then((response) => {
      console.log(response);
      if (response.status === "success") {
        setPosts(response.data);
      }
    });
  };

  useEffect(() => {
    fetchPosts(story._id);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Overview story={story} posts={posts.length} />
      <div className={classes.container}>
        <ButtonGroup setContent={setContent} />
        {sameUser(user, story) ? <CreatePost /> : null}
        <Content story={story} content={content} posts={posts} />
      </div>
    </div>
  );
};

export default Main;
