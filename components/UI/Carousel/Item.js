import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Hooks
import useWidth from "../../../hooks/useWidth";
import { Button } from "@material-ui/core";

// Contexts
import { CarouselContext } from "./contexts/CarouselContext";

const Main = ({ image, children }) => {
  const { changeSlide, index, direction } = useContext(CarouselContext);

  const useStyles = makeStyles((theme) => ({
    Wrapper: {
      display: "flex",
      minHeight: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 1,
      transform: `translate${direction}(${-100 * index}%)`,
      transition: "0.4s ease",
      backgroundImage: `url(${image})`,
    },
  }));

  const classes = useStyles();

  useEffect(() => {}, [index]);

  return (
    <div className={classes.Wrapper}>
      {children}
      {/* <Button variant="contained" onClick={() => changeSlide(1)}>
        Next
      </Button>
      <Button variant="contained" onClick={() => changeSlide(-1)}>
        Prev
      </Button> */}
    </div>
  );
};

export default Main;
