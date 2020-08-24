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
    minHeight: "100%",

    width: "100vw",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Content />
    </div>
  );
};

export default Main;
