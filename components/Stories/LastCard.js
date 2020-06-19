import { useState, useEffect } from "react";
// Material UI
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// Components
import Modal from "../Profile/Modal";
import Carousel from "./Carousel";

const format = (text) => {
  let arr = text.split(" ");
  let format = "";

  if (arr.length > 45) {
    let i = 0;
    while (i < 45) {
      if (i === 44) {
        format += arr[i] + "...";
        ++i;
      } else {
        format += arr[i] + " ";
        ++i;
      }
    }
  }

  return format;
};

function Preview({ story, heading, text, index, changing, setIndex }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      minHeight: "20rem",
      height: "100%",
      maxWidth: 1100,
      borderRadius: 0,
      boxShadow: "none",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 1,
      transform: `translateX(${-100 * (index - 1)}vw)`,
      transition: changing ? "0s" : "0.2s ease-in-out",
    },

    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      padding: 0,

      alignItems: "center",
    },
    imageContainer: {
      display: "flex",
      width: "450px",
      height: "400px",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "450px",
    },

    contentInnerWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "500px",
    },

    title: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Playfair Display, serif",
      fontSize: "38px",
      textAlign: "left",
      fontWeight: 700,
      margin: 0,
      padding: 0,
      marginTop: 30,
      marginBottom: 30,
      width: "90%",
    },

    details: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      marginBottom: 20,
      marginLeft: 5,
    },
    author: {
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 500,
      fontSize: "14px",

      margin: 0,
    },
    date: {
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 500,
      fontSize: "14px",
      margin: 0,
    },
    description: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 300,
      fontSize: 20,
      maxWidth: "90%",
    },
    chip: {
      marginRight: theme.spacing(1),
      marginBottom: 10,
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 700,
      backgroundColor: "#E5E5E5",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
    chipArray: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "90%",
      marginTop: 20,
    },
    button: {
      padding: 10,
      paddingLeft: 60,
      paddingRight: 60,
      width: 100,

      textTransform: "none",
    },
    arrow: {
      display: "flex",
      alignItems: "center",
    },
  }));

  useEffect(() => {
    console.log(index);
  }, [index]);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Card className={classes.card}>
      <div className={classes.arrow}>
        <IconButton
          onClick={() => {
            setIndex((i) => (i - 1) % 4);
          }}
        >
          <ArrowBackIcon className={classes.arrow} />
        </IconButton>
      </div>
      <Modal open={open} setOpen={setOpen} story={story} />
      <CardContent className={classes.innerWrapper}>
        <h1 className={classes.title}>{heading}</h1>

        <p className={classes.description}>{text}</p>
      </CardContent>
      <div className={classes.arrow}>
        <IconButton
          onClick={() => {
            setIndex(-1);
          }}
        >
          <ArrowForwardIcon className={classes.arrowIcon} />
        </IconButton>
      </div>
    </Card>
  );
}

export default Preview;
