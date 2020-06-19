import { useEffect, useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// Components
import Card from "./Card";
import MobileCard from "./MobileCard";
// Hooks
import useWidth from "../../hooks/useWidth";

// Contexts

const Carousel = ({ content }) => {
  const [index, setIndex] = useState(0);
  const { width, setWidth, changing } = useWidth();

  const useStyles = makeStyles((theme) => ({
    innerWrapper: {
      display: "flex",

      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 20,
    },

    cardContainer: {
      display: "flex",
      marginTop: 50,
      overflowX: "none",
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
    arrow: {
      height: 30,
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  //   <div key={card.index} className={classes.cardWrapper}>
  //   {/* <MobileCard changing={changing} data={card} index={index} /> */}
  // </div>

  if (width > 800) {
    return (
      <div className={classes.innerWrapper}>
        <div className={classes.cardContainer}>
          {content.slice(1, 4).map((story) => {
            return (
              <div className={classes.cardWrapper}>
                <Card
                  changing={changing}
                  story={story}
                  setIndex={setIndex}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.innerWrapper}>
        <div className={classes.cardContainer}>
          {content.slice(1, 4).map((story) => {
            return (
              <div className={classes.cardWrapper}>
                <MobileCard
                  changing={changing}
                  story={story}
                  setIndex={setIndex}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Carousel;
