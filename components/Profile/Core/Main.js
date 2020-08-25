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
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: "100%",
      minHeight: "100%",
      alignItems: "flex-start"
    },
    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "35%",
      height: "12%",
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 5,
      boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.5)",
    },

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "80%",
      height: "100%",
      marginTop: 30,
      marginRight: 20,
      boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.5)",
      borderRadius: 5,
    },
    user: {
      display: "flex",
      flexDirection: "column",
      width: "20%",
      
      marginTop: 20,

    },
    banner: {
      position: "fixed",
      width: "100%",
      height: "20%",
      backgroundColor: "#e8cc7d",
      marginTop: 50
    },
    group: {
      display: "flex",
      width: 120,
      height: 190, 
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 300,
      marginLeft: 30,
      marginRight: 20,
      boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.5)",
      borderRadius: 5,
    }
    
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

  const filterPosts = (posts) => posts.filter((post) => post.role !== "child");

  const fetchPosts = async () => {
    await fetchUserPosts(story._id).then((response) => {
      if (response.status === "success") {
        let posts = filterPosts(response.data);
        setIds(extractIds(posts).reverse());
        setPosts(posts.reverse());
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
       
        <div className = {classes.innerWrapper}>
        <Overview width={width} story={story} posts={posts.length} />
        
        </div>
        <div className = {classes.group}>
        <ButtonGroup  setContent={setContent} /> 
        </div>
        <div className={classes.container}>
        
          {/* TODO : Change if we rework Profile */}
          {sameUser(user, story) ? (
            <CreatePost fetchPosts={fetchPosts} />
          ) : null}
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
