import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Contexts
import { ProfileContext } from "../Contexts/ProfileContext";

function Image({ story, setOpen }) {
  const useStyles = makeStyles((theme) => ({
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
  }));

  const classes = useStyles();

  const def =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";

  return (
    <div onClick={() => setOpen(true)} className={classes.imageContainer}>
      <img className={classes.image} src={story.photo ? story.photo : def} />
    </div>
  );
}

export default Image;
