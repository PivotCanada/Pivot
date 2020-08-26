import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components

import Content from "../Content/Main";
import ButtonGroup from "../Content/ButtonGroup";
import FloatingActionButton from "./FloatingActionButton";
import Snackbar from "../../UI/General/Snackbar";
import Modal from "../../Post/Core/Modal";
import CreateModal from "../../Post/Create/Modal";
import Overview from "../../Profile/Overview/Main";
import Filter from "../../Filter/Core/Main";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";

// Utils
import { fetchAllUsers } from "../utils/fetchAllUsers";
import { fetchAllPosts } from "../utils/fetchAllPosts";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100%",
    marginBottom: 25,
    width: "100vw",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: 1000,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 0,
  },
}));

const Main = () => {
  const classes = useStyles();
  // Get rid of this
  const [displaySearch, setDisplaySearch] = useState(true);
  // Get rid of this
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("posts");
  const [profiles, setProfiles] = useState([]);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const { ids, setIds, setId } = useContext(ModalContext);

  const remove = (list, item) => {
    if (item) {
      list = list.filter((i) => i._id !== item._id);
    }
    return list;
  };

  const isRepost = (post) => post.context !== null && post.role === "parent";
  const isComment = (post) => post.context !== null && post.role === "child";
  const isPost = (post) => !isRepost(post) && !isComment(post);

  const filterPosts = (posts) => {
    return posts.filter((post) => !isComment(post));
  };

  const func = () => {
    if (trigger) {
      callback.then((res) => {
        setProfiles([...profiles, res]);
      });
    }
  };

  useEffect(() => {
    if (user) {
      setOpen(true);
    }

    fetchAllUsers().then(async (response) => {
      if (response.status === "success") {
        const users = await remove(response.data, user);

        setProfiles(users);
      }
    });

    fetchAllPosts().then((response) => {
      if (response.status === "success") {
        let posts = response.data.reverse();
        posts = filterPosts(posts);
        setIds(posts.map((post) => post._id));
        setPosts(posts);
      }
    });
  }, []);

  useEffect(() => {
    console.log(profiles);
  }, [profiles]);

  return (
    <div className={classes.root}>
      {/* <Snackbar open={open} setOpen={setOpen} message={"Success"} /> */}
      <Modal />
      <CreateModal />

      <Filter
        setContent={setContent}
        setPosts={setPosts}
        setProfiles={setProfiles}
      />
      <div className={classes.innerWrapper}>
        {/* <Search
          displaySearch={displaySearch}
          setDisplay={setDisplay}
          display={display}
        /> */}

        <Content content={content} profiles={profiles} posts={posts} />
        <ButtonGroup setContent={setContent} />
      </div>

      <FloatingActionButton />
    </div>
  );
};

export default Main;
