import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
// Components
import Modal from "../Profile/Modal";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "100vw",
    padding: 0,
    borderRadius: 0,
    border: 0,
    boxShadow: "none",
  },

  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    padding: 0,
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    minHeight: 200,
    alignItems: "center",
    padding: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "1rem",
    padding: 20,
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    fontSize: 28,
    textAlign: "left",
    fontWeight: 700,
    margin: 0,
    marginTop: 5,
    marginBottom: 5,
    width: "90%",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 0,
    marginBottom: 15,
  },
  author: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 14,
    margin: 0,
    marginRight: 25,
  },
  date: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 14,
    margin: 0,
  },
  description: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 16,
    maxWidth: "90%",
    marginTop: 15,
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
    marginTop: 5,
  },
  button: {
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    width: 100,
    marginTop: 30,

    textTransform: "none",
  },
}));

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
          <div className={classes.details}>
            <h2 className={classes.author}>
              {story.firstname} {story.lastname}
            </h2>
            <h2 className={classes.date}>{story.location}</h2>
          </div>
          <h1 className={classes.title}>{story.business}</h1>

          <p className={classes.description}>{format(story.achievements)}</p>
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
      </CardContent>
    </Card>
  );
}

export default Preview;
