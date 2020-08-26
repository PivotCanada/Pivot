import { useState, useContext, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Posts from "../../Post/Core/Container";
import Profiles from "../../Profile/Core/Container";
import Create from "../../Post/Create/MainProfile";
import Chips from "../Content/Chips";
import Tags from "../Content/Tags";
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

    backgroundColor: "white",
    padding: 0,
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
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    textTransform: "none",
    marginTop: 20,
    width: 100,
  },
}));

const Main = ({ setPosts, setProfiles }) => {
  const classes = useStyles();
  const [tags, setTags] = useState([
    { name: "Toronto" },
    { name: "Montreal" },
    { name: "National Film Board" },
  ]);
  const [activeTags, setActiveTags] = useState([]);

  const func = async () => {
    await searchPosts({
      tags: activeTags,
    }).then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };

  const filterProfile = async () => {
    await searchPosts({
      tags: activeTags,
    }).then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };

  useEffect(() => {
    func();
  }, [activeTags]);

  return (
    <div className={classes.wrapper}>
      <Chips
        tags={tags}
        setTags={setTags}
        setActiveTags={setActiveTags}
        activeTags={activeTags}
      />
      <Tags setTags={setTags} tags={tags} setActiveTags={setActiveTags} />

      {/* <Button
        className={classes.button}
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
      </Button> */}
    </div>
  );
};

export default Main;
