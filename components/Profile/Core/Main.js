import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
// Components
import ButtonGroup from "../Content/ButtonGroup";
import CreatePost from "../../Post/Create/MainProfile";
import Overview from "../Overview/Main";
import Content from "../Content/Main";
import Follow from "../Overview/Follow";
import EditModal from "../../editProfile/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Utils
import { fetchUserPosts } from "../utils/fetchUserPosts";
import { sameUser } from "../utils/sameUser";
import { fetchUserLikes } from "../utils/fetchUserLikes";
// Hooks
import useWidth from "../../../hooks/useWidth";
import { Button } from "@material-ui/core";

const Main = ({ story, initialContent = "story" }) => {
  // TODO : Rework if changing Profile page ...

  const { width, setWidth } = useWidth();

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      minHeight: "100%",
      alignItems: "top",
      marginTop: 30,
    },
    innerWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      alignContent: "space-between",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
      justifyContent: "space-between",
    },

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    user: {
      display: "flex",
      flexDirection: "column",
      width: "20%",

      marginTop: 20,
    },

    group: {
      position: "static",
      display: "flex",
      width: 420,
      height: 55,
      justifyContent: "space-evenly",
      alignItems: "center",
      marginBottom: 30,

      borderRadius: 5,
    },
    image: {
      height: "100%",

      background:
        "url(`https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80`)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    button: {
      display: "flex",
      color: "white",
      height: 40,

      alignSelf: "flex-end",
      marginRight: 20,
      borderColor: "white",
      fontSize: 10,
    },
    followButton: {
      display: "flex",
      color: "#9E00FF",
      height: 50,
      marginRight: 20,
      marginBottom: 20,
      alignSelf: "flex-start",
    },
    buttons: {
      display: "flex",
      flexDirection: "column",
      alignitems: "flex-end",
      alignContent: "center",
      justifyContent: "space-around",
      height: "100%",
    },
  }));

  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { setIds } = useContext(ModalContext);
  const [profile, setProfile] = useState({});

  // TODO : Put this in Context ?

  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
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

  useEffect(() => {
    if (story) {
      setProfile(story);
    } else {
      setProfile(user);
    }
  }, [user, story]);

  if (story) {
    // console.log(story);
    return (
      <div className={classes.wrapper}>
        <div className={classes.banner} />
        <div className={classes.innerWrapper}>
          <EditModal showEdit={showEdit} setShowEdit={setShowEdit} />
          <Overview width={width} story={story} posts={posts.length} />
          <div className={classes.buttons}>
            {/* {!sameUser(user,profile) ? <Follow  profile={profile}/> : null} */}
            {sameUser(user, profile) ? (
              <Button
                variant="outlined"
                className={classes.button}
                onClick={() => setShowEdit(true)}
              >
                <EditIcon />
              </Button>
            ) : null}
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.group}>
            <ButtonGroup setContent={setContent} />
          </div>
          {/* TODO : Change if we rework Profile */}

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
  } else {
    return null;
  }
};

export default Main;
