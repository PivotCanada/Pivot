import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, ButtonGroup } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// Components
import MobileCard from "./MobileCard";
import Carousel from "./Carousel";
import Search from "./Search";
import PostCard from "../Post/Main/Card";
import Posts from "./Posts";
import Stories from "./Stories";
import CreatePost from "../Post/Create/MainProfile";
// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import Router from "next/router";
// Utils
import { fetchAllUsers } from "./utils/fetchAllUsers";
import { fetchAllPosts } from "./utils/fetchAllPosts";
// Hooks
import useWitdh from "../../hooks/useWidth";
import useValidate from "../../hooks/useValidate";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    minHeight: "100vh",
    marginTop: 150,
    marginBottom: 75,
    width: "100vw",
    overflowX: "hidden",
  },

  textField: {
    width: "17rem",
    marginTop: 20,
    flexGrow: 1,
    flexShrink: 1,
  },

  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 0,
  },

  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 0,
  },
  header: {
    textAlign: "center",
    marginBottom: 35,
    fontSize: 48,
    fontWeight: 500,
    fontFamily: "Playfair Display, serif",
    width: "90vw",
  },
  text: {
    textAlign: "center",
    width: "90vw",
    margin: 5,
    fontWeight: 300,
    fontSize: 22,
    fontFamily: "Poppins, serif",
  },

  button: {
    marginTop: 45,
    marginBottom: "3rem",
    textTransform: "none",
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 55,
    paddingRight: 55,
    fontSize: 21,
    fontFamily: "Poppins, serif",
  },
  logo: {
    width: 100,
    height: "auto",
  },
  nfb: {
    width: 100,
    height: "auto",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
    overflowX: "hidden",
    width: "100%",
  },
  info: {
    textAlign: "center",
    marginBottom: 25,
    marginTop: 50,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "Poppins, serif",
    color: "black",
  },
  createPost: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
  addIcon: {},
}));

const Main = () => {
  const classes = useStyles();
  const [openSnack, setOpenSnack] = useState(false);
  const [content, setContent] = useState([]);
  const [posts, setPosts] = useState([]);
  const [display, setDisplay] = useState(true);
  const [contentDisplay, setContentDisplay] = useState("stories");
  const { width, setWidth } = useWitdh();
  const {
    user,
    setUser,
    setAuthenticated,
    authenticated,
    setLoading,
  } = useContext(UserContext);
  const { setShowProfile } = useContext(ModalContext);

  const { validateSession } = useValidate(
    setUser,
    setAuthenticated,
    setLoading
  );

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {}, [display]);

  useEffect(() => {
    if (!user) {
      validateSession();
    }

    if (user) {
      setOpenSnack(true);
    }

    fetchAllUsers().then((response) => {
      console.log(response);
      setContent(response.data);
    });
    fetchAllPosts().then((response) => {
      console.log(response);
      setPosts(response.data.reverse());
    });
  }, [user]);

  if (width > 950) {
    return (
      <div className={classes.root}>
        <Snackbar open={openSnack} autoHideDuration={3000} onClose={() => {}}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={() => setOpenSnack(false)}
          >
            Action Succesful
          </MuiAlert>
        </Snackbar>
        <div className={classes.innerWrapper}>
          <Search setDisplay={setDisplay} display={display} />
          <ButtonGroup
            style={{ display: display ? "block" : "none" }}
            color="primary"
            aria-label="outlined secondary button group"
          >
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setContentDisplay("stories")}
            >
              Stories
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setContentDisplay("posts")}
            >
              Posts
            </Button>
          </ButtonGroup>

          <div className={classes.contentWrapper}>
            {authenticated && contentDisplay === "posts" ? (
              <CreatePost />
            ) : null}
            {contentDisplay === "posts" ? (
              <Posts display={display} posts={posts} />
            ) : null}

            {/* {posts.map((post) => {
            return <PostCard display={display} key={post._id} post={post} />;
          })} */}

            {/* {contentDisplay === "search" ? (
            <Search setDisplay={setDisplay} />
          ) : null} */}

            {/* <Search setDisplay={setDisplay} /> */}

            {contentDisplay === "stories" ? (
              <Stories display={display} content={content} />
            ) : null}
          </div>
        </div>

        {user ? (
          <Fab
            onClick={() => setShowProfile(true)}
            className={classes.createPost}
            color="primary"
            aria-label="add"
          >
            <AccountCircleIcon className={classes.addIcon} />
          </Fab>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          {content.map((user) => {
            return <MobileCard key={user._id} story={user} />;
          })}
        </div>
      </div>
    );
  }
};

export default Main;
