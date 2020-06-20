import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// Components
import Search from "./Search";
import Content from "./Content";
import ButtonGroup from "./ButtonGroup";
import FloatingActionButton from "./FloatingActionButton";
// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
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
  const [openSnack, setOpenSnack] = useState(false);
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

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (!user) {
      validateSession();
    }
    if (user) {
      setOpenSnack(true);
    }
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
          <ButtonGroup display={display} setContent={setContent} />
          <Content display={display} content={content} />
        </div>
        <FloatingActionButton />
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          {/* {content.map((user) => {
            return <MobileCard key={user._id} story={user} />;
          })} */}
        </div>
      </div>
    );
  }
};

export default Main;
