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
// Hooks
import useValidate from "../../../hooks/useValidate";
// Utils
import { fetchAllUsers } from "../utils/fetchAllUsers";
import { fetchAllPosts } from "../utils/fetchAllPosts";

const useStyles = makeStyles(() => ({
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
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(true);
  const [content, setContent] = useState("stories");
  const [profiles, setProfiles] = useState([]);
  const [posts, setPosts] = useState([]);
  const { user, setUser, setAuthenticated, setLoading } = useContext(
    UserContext
  );
  const { validateSession } = useValidate(
    setUser,
    setAuthenticated,
    setLoading
  );

  useEffect(() => {
    if (!user) {
      validateSession();
    }
    if (user) {
      setOpen(true);
    }

    fetchAllUsers().then((response) => {
      if (response.status === "success") {
        setProfiles(response.data);
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
      <Snackbar open={open} setOpen={setOpen} message={"Success"} />
      <div className={classes.innerWrapper}>
        <Search setDisplay={setDisplay} display={display} />
        <ButtonGroup display={display} setContent={setContent} />
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
