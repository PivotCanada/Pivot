import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Search from "./Search";
import Content from "./Content";
import ButtonGroup from "./ButtonGroup";
import FloatingActionButton from "./FloatingActionButton";
import Snackbar from "../UI/General/Snackbar";
// Contexts
import { UserContext } from "../../contexts/UserContext";
// Hooks
import useWitdh from "../../hooks/useWidth";
import useValidate from "../../hooks/useValidate";

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
  const { width, setWidth } = useWitdh();
  const { user, setUser, setAuthenticated, setLoading } = useContext(
    UserContext
  );
  const { validateSession } = useValidate(
    setUser,
    setAuthenticated,
    setLoading
  );

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (!user) {
      validateSession();
    }
    if (user) {
      setOpen(true);
    }
  }, [user]);

  if (width > 950) {
    return (
      <div className={classes.root}>
        <Snackbar open={open} setOpen={setOpen} message={"Success"} />
        <div className={classes.innerWrapper}>
          <Search setDisplay={setDisplay} display={display} />
          <ButtonGroup display={display} setContent={setContent} />
          <Content display={display} content={content} />
        </div>
        <FloatingActionButton />
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}></div>
      </div>
    );
  }
};

export default Main;
