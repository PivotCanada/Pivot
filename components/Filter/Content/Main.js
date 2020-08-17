import { useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Posts from "../../Post/Core/Container";
import Profiles from "../../Profile/Core/Container";
import Create from "../../Post/Create/MainProfile";
import Chips from "../Content/Chips";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
// Hooks
import useLanguage from "../../../hooks/useLanguage";
// Utils
import { searchPosts } from "../utils/searchPosts";
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
  button: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    textTransform: "none",
    marginTop: 20,
  },
}));

const Main = ({ setPosts }) => {
  const classes = useStyles();

  const tags = [{ name: "Solar" }, { name: "National Film Board" }];
  const [activeTags, setActiveTags] = useState([]);

  return (
    <div className={classes.wrapper}>
      <Chips
        tags={tags}
        setActiveTags={setActiveTags}
        activeTags={activeTags}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        onClick={async () => {
          await searchPosts({
            tags: activeTags,
          }).then((response) => {
            console.log(response);
            setPosts(response.data);
          });
        }}
      >
        Filter
      </Button>
    </div>
  );
};

export default Main;
