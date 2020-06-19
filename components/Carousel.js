import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// Components
import Card from "./Card";
import MobileCard from "./MobileCard";
// Hooks
import useWidth from "../hooks/useWidth";

// Contexts

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { width, setWidth, changing } = useWidth();

  const useStyles = makeStyles((theme) => ({
    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 50,
    },

    cardContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: 50,
      overflowX: "hidden",
      width: "100%",
    },
    cardWrapper: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
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
  }));

  const classes = useStyles();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={classes.innerWrapper}>
      <p className={classes.info}>Does your business have a story?</p>
      <div className={classes.cardContainer}>
        {data.map((card) => (
          <div key={card.index} className={classes.cardWrapper}>
            {width < 800 ? (
              <MobileCard changing={changing} data={card} index={index} />
            ) : (
              <Card changing={changing} data={card} index={index} />
            )}
          </div>
        ))}
      </div>
      <IconButton
        onClick={() => {
          setIndex((i) => (i + 1) % data.length);
        }}
      >
        <ArrowForwardIcon className={classes.arrow} />
      </IconButton>
    </div>
  );
};

export default Carousel;
