import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Hooks
import useWidth from "../../../hooks/useWidth";
import { Button } from "@material-ui/core";

// Contexts
import { CarouselContext } from "./contexts/CarouselContext";

const Main = ({ reference }) => {
  const { index } = useContext(CarouselContext);
  const [active, setActive] = useState(false);

  const activate = () => index === reference;

  useEffect(() => {
    setActive(activate);
  }, [index]);

  const useStyles = makeStyles((theme) => ({
    Wrapper: {
      border: "1px solid black",
      borderRadius: "50%",
      height: 20,
      width: 20,
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: active ? "black" : "none",
    },
  }));

  const classes = useStyles();

  useEffect(() => {}, [index]);

  return <div className={classes.Wrapper} />;
};

export default Main;
