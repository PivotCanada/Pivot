import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Content from "../Content/Main";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
// Utils

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    marginBottom: 25,
    marginTop: 0,
    width: "100%",
    position: "fixed",
    opacity: 0.95,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",

    margin: 0,
  },
}));

const Main = ({ setPosts, setProfiles }) => {
  const classes = useStyles();

  const { user } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <Content setPosts={setPosts} setProfiles={setProfiles} />
    </div>
  );
};

export default Main;
