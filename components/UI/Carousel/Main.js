import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Item from "./Item";
// Hooks
import useWidth from "../../../hooks/useWidth";

const Main = ({ data, direction }) => {
  const [index, setIndex] = useState(0);
  const { width, setWidth, changing } = useWidth();

  const useStyles = makeStyles((theme) => ({
    Wrapper: {
      border: "1px solid black",
      height: "80vh",
      overflowY: "hidden",
    },
  }));

  const images = [
    "https://images.unsplash.com/photo-1593462512927-2d51160b5981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1592185285645-5b9d0b13743c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1561211919-1947abbbb35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2ODQ0fQ&auto=format&fit=crop&w=1651&q=80",
  ];

  const classes = useStyles();

  const mod = (n, m) => ((n % m) + m) % m;

  const changeSlide = (n) => {
    setIndex((i) => mod(i + n, 3));
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [index]);

  return (
    <div className={classes.Wrapper}>
      {images.map((image) => {
        return (
          <Item
            index={index}
            changeSlide={changeSlide}
            image={image}
            direction={direction}
          />
        );
      })}
    </div>
  );
};

export default Main;
