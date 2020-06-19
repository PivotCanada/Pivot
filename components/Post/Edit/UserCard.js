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

function Preview({ user }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      borderRadius: 0,

      boxShadow: "0px, 0px",
    },

    innerWrapper: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      padding: 0,
      marginBottom: 25,
      boxShadow: "0px, 0px",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
    imageContainer: {
      display: "flex",
      width: 75,
      height: 75,
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      marginLeft: 10,
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

      marginLeft: 5,
    },
    author: {
      color: "black",
      fontFamily: "Open Sans, sans serif",
      fontWeight: 700,
      fontSize: 16,
      padding: 0,
      margin: 0,
      marginLeft: 5,
      marginBottom: 10,
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
      fontWeight: 500,
      fontSize: 10,
      backgroundColor: "#E5E5E5",
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
    chipArray: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      marginTop: 15,
    },
    button: {
      padding: 3,
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
  const def =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";
  return (
    <div className={classes.card}>
      {/* TODO : Sort out standard way for doing this */}

      <div className={classes.innerWrapper}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={user.photo ? user.photo : def} />
        </div>
        <div className={classes.content}>
          <h2 className={classes.author}>
            {user.firstname} {user.lastname}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Preview;
