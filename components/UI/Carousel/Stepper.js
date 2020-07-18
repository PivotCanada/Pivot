import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Hooks
import useWidth from "../../../hooks/useWidth";
import { Button } from "@material-ui/core";
//  Components
import Circle from "./Circle";
// Contexts
import { CarouselContext } from "./contexts/CarouselContext";

const Main = () => {
  const { index, elements } = useContext(CarouselContext);

  const useStyles = makeStyles((theme) => ({
    Wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      right: "5%",
      minHeight: "100vh",
      zIndex: 3,
    },
    circle: {
      border: "1px solid white",
      borderRadius: "50%",
      height: 20,
      width: 20,
      marginTop: 5,
      marginBottom: 5,
    },
  }));

  const classes = useStyles();

  useEffect(() => {}, [index]);

  const range = (i, end) => {
    if (i === end) return [i];
    return [i, ...range(i + 1, end)];
  };

  return (
    <div className={classes.Wrapper}>
      {range(0, elements).map((i) => (
        <Circle key={i} reference={i} />
      ))}
    </div>
  );
};

export default Main;
