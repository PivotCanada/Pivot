import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Search from "../Search";
import Content from "../Content/Main";
import ButtonGroup from "../Content/ButtonGroup";
import FloatingActionButton from "./FloatingActionButton";
import Snackbar from "../../UI/General/Snackbar";
import Modal from "../../Profile/Core/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SearchContext } from "../../../contexts/SearchContext";
// Utils
import { fetchAllUsers } from "../utils/fetchAllUsers";
import { fetchAllPosts } from "../utils/fetchAllPosts";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100%",
    marginTop: 100,
    marginBottom: 25,
    width: "100vw",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
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
  const [content, setContent] = useState("stories");
  const [profiles, setProfiles] = useState([]);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const { ids, setIds, setId } = useContext(ModalContext);
  const { display, setDisplay } = useContext(SearchContext);

  const remove = (list, item) => {
    if (item) {
      list = list.filter((i) => i._id !== item._id);
    }
    return list;
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
        setIds(users.map((user) => user._id));
        setProfiles(users);
      }
    });

    fetchAllPosts().then((response) => {
      if (response.status === "success") {
        setPosts(response.data.reverse());
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      {/* <Snackbar open={open} setOpen={setOpen} message={"Success"} /> */}
      <Modal />
      <div className={classes.innerWrapper}>
        <Search
          displaySearch={displaySearch}
          setDisplay={setDisplay}
          display={display}
        />
        <ButtonGroup
          setDisplaySearch={setDisplaySearch}
          display={display}
          setContent={setContent}
        />
        <Content
          display={display}
          content={content}
          profiles={profiles}
          posts={posts}
        />
      </div>
      <FloatingActionButton />
    </div>
  );
};

export default Main;
