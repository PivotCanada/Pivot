import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Hooks
import useWidth from "../../../hooks/useWidth";
import { Button } from "@material-ui/core";

// Contexts

const Main = ({ index, changeSlide, image, direction }) => {
  const useStyles = makeStyles((theme) => ({
    Wrapper: {
      minHeight: "100%",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 1,
      transform: `translate${direction}(${-100 * index}%)`,
      transition: "0.2s ease-in-out",
      backgroundImage: `url(${image})`,
    },
  }));

  const classes = useStyles();

  useEffect(() => {}, [index]);

  return (
    <div className={classes.Wrapper}>
      <Button variant="contained" onClick={() => changeSlide(1)}>
        Next
      </Button>
      <Button variant="contained" onClick={() => changeSlide(-1)}>
        Prev
      </Button>
    </div>
  );
};

export default Main;
