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
import Modal from "./Modal";

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

function Preview({ story }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      minHeight: 400,
      maxHeight: 400,
      minWidth: 300,
      maxWidth: 300,
      borderRadius: 0,
      boxShadow: "none",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 1,
    },

    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      padding: 0,
    },
    imageContainer: {
      display: "flex",
      width: "300px",
      height: "200px",
      alignItems: "center",

      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: 4,
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
    },

    contentInnerWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },

    title: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Noto Sans, sans serif",
      fontSize: 18,
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
      marginBottom: 5,
      marginTop: 10,
    },
    author: {
      color: "black",
      fontFamily: "Noto Sans, sans serif",
      fontWeight: 700,
      fontSize: 12,
      color: "grey",

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
      fontSize: 8,
      marginBottom: 10,
      fontFamily: "Open Sans, sans serif",
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
      maxWidth: 300,
      marginTop: 10,
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

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const def =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";

  if (story !== null) {
    return (
      <Card className={classes.card}>
        <Modal open={open} setOpen={setOpen} story={story} />
        <CardContent className={classes.innerWrapper}>
          <div onClick={() => setOpen(true)} className={classes.imageContainer}>
            <img
              className={classes.image}
              src={story.photo ? story.photo : def}
            />
          </div>
          <div className={classes.content}>
            <div className={classes.contentInnerWrapper}>
              <div className={classes.details}>
                <h1 className={classes.title}>{story.business}</h1>
              </div>
              <h2 className={classes.author}>
                {story.firstname} {story.lastname}
              </h2>

              {/* <p className={classes.description}>{format(story.achievements)}</p> */}
              <div className={classes.chipArray}>
                <Chip
                  size="small"
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
                    size="small"
                    icon={<PublicIcon />}
                    label={story.website}
                    className={classes.chip}
                  />
                </a>
                <Chip
                  label={story.industry}
                  size="small"
                  className={classes.chip}
                />
              </div>
              {/* <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={() => setOpen(true)}
            >
              View
            </Button> */}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return <Card className={classes.card} />;
  }
}

export default Preview;
