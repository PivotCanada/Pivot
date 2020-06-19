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

function Preview({ story, index, changing, setIndex }) {
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
      flexDirection: "row",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      padding: 0,
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
      marginLeft: 50,
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
      fontSize: "14px",
      maxWidth: "90%",
      marginTop: 30,
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
      marginTop: 35,
      marginBottom: 35,
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
    arrowIcon: {},
  }));

  useEffect(() => {}, [index]);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const def =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";
  return (
    <Card className={classes.card}>
      <Modal open={open} setOpen={setOpen} story={story} />
      <CardContent className={classes.innerWrapper}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={story.photo ? story.photo : def}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.contentInnerWrapper}>
            <div className={classes.details}>
              <h2 className={classes.author}>
                {story.firstname} {story.lastname}
              </h2>
            </div>
            <h1 className={classes.title}>{story.business}</h1>

            {/* <p className={classes.description}>{format(story.achievements)}</p> */}
            <div className={classes.chipArray}>
              <Chip
                icon={<RoomIcon />}
                label={story.location}
                className={classes.chip}
              />
              <a
                style={{ textDecoration: "none" }}
                href={"https://" + story.website}
                target="_blank"
              >
                <Chip
                  icon={<PublicIcon />}
                  label={story.website}
                  className={classes.chip}
                />
              </a>
              <Chip label={story.industry} className={classes.chip} />
            </div>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={() => setOpen(true)}
            >
              View
            </Button>
          </div>
        </div>
      </CardContent>
      <div className={classes.arrow}>
        <IconButton
          onClick={() => {
            setIndex((i) => (i + 1) % 5);
          }}
        >
          <ArrowForwardIcon className={classes.arrowIcon} />
        </IconButton>
      </div>
    </Card>
  );
}

export default Preview;
