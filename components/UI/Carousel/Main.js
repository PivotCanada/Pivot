import React, { useEffect, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Stepper from "./Stepper";
// Contexts
import { CarouselStore } from "./contexts/CarouselContext";
// Hooks
import useWidth from "../../../hooks/useWidth";

const Main = ({ direction, children }) => {
  const [elements, setElements] = useState(0);
  const { width, setWidth, changing } = useWidth();

  const useStyles = makeStyles((theme) => ({
    Wrapper: {
      height: "95vh",
      overflowY: "hidden",
      zIndex: 0,
    },
  }));

  const images = [
    "https://images.unsplash.com/photo-1593462512927-2d51160b5981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1592185285645-5b9d0b13743c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1561211919-1947abbbb35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2ODQ0fQ&auto=format&fit=crop&w=1651&q=80",
  ];

  const classes = useStyles();

  const handleElements = () => {
    let n = React.Children.count(children);
    return n;
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setElements(handleElements());
  }, [children]);

  return (
    <CarouselStore direction={direction} elements={elements}>
      <Stepper />
      <div className={classes.Wrapper}>{children}</div>
    </CarouselStore>
  );
};

export default Main;
