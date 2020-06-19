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
import SecondaryCard from "./SecondaryCard";
import LastCard from "./LastCard";
import MobileCard from "./MobileCard";
// Hooks
import useWidth from "../../hooks/useWidth";

// Contexts

const Carousel = ({ story, display }) => {
  const [index, setIndex] = useState(-1);
  const { width, setWidth, changing } = useWidth();

  const useStyles = makeStyles((theme) => ({
    innerWrapper: {
      display: display ? "flex" : "none",

      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 50,
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

  useEffect(() => {
    console.log(display);
  }, [display]);

  //   <div key={card.index} className={classes.cardWrapper}>
  //   {/* <MobileCard changing={changing} data={card} index={index} /> */}
  // </div>

  return (
    <div className={classes.innerWrapper}>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrapper}>
          <Card
            changing={changing}
            story={story}
            setIndex={setIndex}
            index={index}
          />
        </div>
        <div className={classes.cardWrapper}>
          <SecondaryCard
            changing={changing}
            story={story}
            setIndex={setIndex}
            index={index}
            text={story.achievements}
            heading={"Achievements"}
          />
        </div>
        <div className={classes.cardWrapper}>
          <SecondaryCard
            changing={changing}
            story={story}
            setIndex={setIndex}
            index={index}
            text={story.goals}
            heading={"Goals"}
          />
        </div>
        <div className={classes.cardWrapper}>
          <SecondaryCard
            changing={changing}
            story={story}
            setIndex={setIndex}
            index={index}
            text={story.wish}
            heading={"Wishes"}
          />
        </div>
        <div className={classes.cardWrapper}>
          <LastCard
            changing={changing}
            story={story}
            setIndex={setIndex}
            index={index}
            text={story.challenges}
            heading={"Challenges"}
          />
        </div>
      </div>

      {/* <IconButton
        onClick={() => {
          setIndex((i) => (i + 1) % 3);
        }}
      >
        <ArrowForwardIcon className={classes.arrow} />
      </IconButton> */}
    </div>
  );
};

export default Carousel;
