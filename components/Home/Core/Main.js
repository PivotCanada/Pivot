import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Search from "../Search";
import Content from "../Content/Main";
import ButtonGroup from "../Content/ButtonGroup";
import FloatingActionButton from "./FloatingActionButton";
import Snackbar from "../../UI/General/Snackbar";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
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
  const { display, setDisplay } = useContext(SearchContext);

  const remove = (list, item) => {
    if (item) {
      list = list.filter((i) => i._id !== item._id);
    }
    return list;
  };

  useEffect(() => {
    if (user) {
      setOpen(true);
    }

    fetchAllUsers().then((response) => {
      if (response.status === "success") {
        const users = remove(response.data, user);
        setProfiles(users);
      }
    });

    fetchAllPosts().then((response) => {
      if (response.status === "success") {
        setPosts(response.data.reverse());
      }
    });
  }, [user]);

  return (
    <div className={classes.root}>
      {/* <Snackbar open={open} setOpen={setOpen} message={"Success"} /> */}
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
