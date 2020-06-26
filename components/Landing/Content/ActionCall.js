import { useEffect, useContext, useState } from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";

const ActionCall = ({ width, header, text, buttonText, about, discover }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: "white",
      borderRadius: 10,
      margin: 0,
      padding: 0,
      width: "100%",
    },
    header: {
      textAlign: "left",
      margin: 0,
      textAlign: "center",
      fontSize: 38,
      fontWeight: 700,
      fontFamily: "Noto Sans, sans serif",
    },
    link: {
      textAlign: "center",
      margin: 0,

      fontSize: 16,
      fontWeight: 700,
      color: "blue",
      fontFamily: "Noto Sans, sans serif",
      "&:hover": {
        opacity: 0.6,
        cursor: "pointer",
      },
    },
    text: {
      marginTop: 15,
      width: width < 600 ? "90%" : 550,
      textAlign: "center",
      fontWeight: 300,
      fontSize: 22,
      fontFamily: "Open Sans, sans erif",
    },

    button: {
      marginTop: 5,
      marginBottom: 60,
      textTransform: "none",
      fontWeight: 700,
      width: 300,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 25,
      paddingRight: 25,
      fontSize: 18,
      fontFamily: "Open Sans, sans serif",
    },
  }));

  const classes = useStyles();
  const { setShowOnboard, setShowLogin } = useContext(ModalContext);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>{header}</h1>
      <p className={classes.text}>{text}</p>
      <Button
        onClick={() => {
          setShowOnboard(true);
          setShowLogin(true);
        }}
        color="primary"
        className={classes.button}
        variant="contained"
      >
        {buttonText}
      </Button>
      <div
        style={{ display: "flex", width: 200, justifyContent: "space-between" }}
      >
        <Link href={"/about"}>
          <h1 className={classes.link}>{about}</h1>
        </Link>
        <Link href={"/"}>
          <h1 className={classes.link}>{discover}</h1>
        </Link>
      </div>
    </div>
  );
};

export default ActionCall;
