import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Button, ButtonGroup } from "@material-ui/core";
// Components
import MobileCard from "./MobileCard";
import Carousel from "./Carousel";
import Search from "./Search";
import PostCard from "../Post/Main/Card";
// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import Router from "next/router";
// Utils
import { fetchAllUsers } from "./utils/fetchAllUsers";
import { fetchAllPosts } from "./utils/fetchAllPosts";
// Hooks
import useWitdh from "../../hooks/useWidth";
import useValidate from "../../hooks/useValidate";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: 40,
    marginBottom: 75,
    width: "90vw",
    overflowX: "hidden",
  },

  textField: {
    width: "17rem",
    marginTop: 20,
    flexGrow: 1,
    flexShrink: 1,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: 35,
    fontSize: 48,
    fontWeight: 500,
    fontFamily: "Playfair Display, serif",
    width: "90vw",
  },
  text: {
    textAlign: "center",
    width: "90vw",
    margin: 5,
    fontWeight: 300,
    fontSize: 22,
    fontFamily: "Poppins, serif",
  },

  button: {
    marginTop: 45,
    marginBottom: "3rem",
    textTransform: "none",
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 55,
    paddingRight: 55,
    fontSize: 21,
    fontFamily: "Poppins, serif",
  },
  logo: {
    width: 100,
    height: "auto",
  },
  nfb: {
    width: 100,
    height: "auto",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
    overflowX: "hidden",
    width: "100%",
  },
  info: {
    textAlign: "center",
    marginBottom: 25,
    marginTop: 50,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "Poppins, serif",
    color: "black",
  },
  createPost: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
  addIcon: {},
}));

const Main = ({ display, posts }) => {
  const classes = useStyles();
  //   const [posts, setPosts] = useState([]);

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  //   useEffect(() => {
  //     fetchAllPosts().then((response) => {
  //       console.log(response);
  //       setPosts(response.data);
  //     });
  //   }, []);

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      {posts.map((post) => {
        return <PostCard display={display} key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Main;
