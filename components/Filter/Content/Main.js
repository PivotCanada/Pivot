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
import ButtonGroup from "./ButtonGroup";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";
// Hooks
import useLanguage from "../../../hooks/useLanguage";
// Utils
import { searchPosts } from "../utils/searchPosts";
import { searchUsers } from "../utils/searchUsers";
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

const Main = ({ setPosts, setProfiles, setContent }) => {
  const classes = useStyles();
  const [tags, setTags] = useState([
    { name: "Montréal Quebec Canada" },
    { name: "Toronto Ontario Canada" },
  ]);
  const [activeTags, setActiveTags] = useState([]);
  const {setIds} = useContext(ModalContext);

  const func = async () => {
    await searchPosts({
      tags: activeTags,
    }).then((response) => {
      if (response.status === "success"){
        console.log(response);
        let data = response.data;
        setIds(data.map((post) => post._id));
        setPosts(data);
      }
      else{
        return;
      }
    });
  };

  const filterProfile = async () => {
    await searchUsers({
      tags: activeTags,
    }).then((response) => {
      console.log(response);
      setProfiles(response.data);
    });
  };

  useEffect(() => {
    //  why u call both these at once :(
    filterProfile();
    func();
  }, [activeTags]);

  return (
    <div className={classes.wrapper}>
      <ButtonGroup setContent={setContent} />
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
