import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Posts from "../../Post/Core/Container";
import Profiles from "../../Profile/Core/Container";
import Create from "../../Post/Create/MainProfile";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
// Utils
import { fetchAllUsers } from "../utils/fetchAllUsers";
import { fetchAllPosts } from "../utils/fetchAllPosts";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "white",
    borderRadius: 10,
    margin: 0,
  },
  text: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    marginTop: 20,
    width: "50%",
    textAlign: "center",
  },
}));

const Main = ({ content, display, profiles, posts }) => {
  const classes = useStyles();
  const { authenticated } = useContext(UserContext);

  switch (content) {
    case "posts":
      return (
        <div className={classes.wrapper}>
          <p
            className={classes.text}
            style={{ display: display ? "block" : "none" }}
          >
            Follow the Sustainability Journey of fellow SMEs
          </p>
          {authenticated && display ? <Create /> : null}
          <Posts display={display} data={posts} />
        </div>
      );
    case "stories":
      return (
        <div className={classes.wrapper}>
          <p
            className={classes.text}
            style={{ display: display ? "block" : "none" }}
          >
            Discover Sustainability Stories and Connect with Fellow SMEs
          </p>
          <Profiles display={display} data={profiles} />
        </div>
      );
    default:
      return null;
  }
};
export default Main;
