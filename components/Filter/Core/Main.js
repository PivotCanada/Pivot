import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Content from "../Content/Main";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import { FilterContext } from "../../../contexts/FilterContext";
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
}));

const Main = ({ setPosts, setProfiles }) => {
  const classes = useStyles();
  const { filterPosts, filterProfiles, activeTags } = useContext(FilterContext);
  const { extractIds } = useContext(ModalContext);

  useEffect(() => {
    filterProfiles(setProfiles);
    filterPosts(setPosts, extractIds);
    console.log("active tags");
    console.log(activeTags);
  }, [activeTags]);

  return (
    <div className={classes.root}>
      <Content type={"Location"} />
      <Content type={"Industry"} />
    </div>
  );
};

export default Main;
