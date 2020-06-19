import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import Modal from "./Profile/Modal";

function Preview({ changing, data, index }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: "flex",
      flexDirection: "column",
      overflow: "scroll",
      minHeight: 600,
      maxWidth: 800,
      marginBottom: 25,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 1,
      transform: `translateX(${-100 * (index - 1)}vw)`,
      transition: changing ? "0s" : "0.2s ease-in-out",
    },

    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexWrap: "wrap",
      padding: 0,
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer",
      },
    },
    imageContainer: {
      display: "flex",
      width: 250,
      height: 250,
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
      minheight: "300px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
    },

    title: {
      textDecoration: "none",
      color: "black",
      fontWeight: 500,
      fontFamily: "Playfair Display, serif",
      fontSize: 24,
      textAlign: "center",
      margin: 0,
      marginTop: 15,
    },

    details: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginTop: "20px",
    },
    author: {
      color: "black",
      fontFamily: "Poppins, sans serif",
      fontWeight: 500,
      fontSize: 22,
      textAlign: "center",
      margin: 0,
      marginTop: 10,
      marginBottom: 10,
    },
    date: {
      color: "black",
      fontFamily: "Poppins, sans serif",
      fontWeight: 300,
      fontSize: "12px",
      margin: 0,
    },
    description: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Poppins, sans serif",
      fontWeight: 300,
      margin: 0,
      fontSize: 22,
      maxWidth: "75%",
      textAlign: "center",
      marginTop: 20,
      justifySelf: "center",
    },
    chip: {
      marginRight: theme.spacing(1),
      paddingLeft: 5,
      paddingRight: 5,
      fontFamily: "Poppins, sans serif",
      fontWeight: 500,
      backgroundColor: "#E5E5E5",
    },
    chipArray: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "90%",
      marginTop: 10,
    },
    button: {
      marginTop: 25,
    },

    socialContainer: {
      display: "flex",
      paddingTop: 10,
      paddingBottom: 15,
      paddingLeft: 0,
      marginLeft: -14,
    },
    favoriteRoundedIcon: {
      padding: 0,
    },
    link: {
      textDecoration: "none",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <a className={classes.link} href={data.link} target="_blank">
        <CardContent className={classes.innerWrapper}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={data.image} />
          </div>
          <div className={classes.content}>
            <h1 className={classes.title}>{data.name}</h1>
            <div className={classes.details}>
              <h2 className={classes.author}>{data.role}</h2>
            </div>
            <p className={classes.description}>{data.description}</p>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}

export default Preview;
