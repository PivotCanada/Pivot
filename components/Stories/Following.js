import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Card";
import MobileCard from "./MobileCard";
import Carousel from "./Carousel";
import Search from "./Search";
import Modal from "../Contacts/Modal";
// Contexts
import { UserContext } from "../../contexts/UserContext";
import Router from "next/router";
// Utils
import { fetchAllUsers } from "./utils/fetchAllUsers";
// Hooks
import useWitdh from "../../hooks/useWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: 150,
    marginBottom: 75,
    width: "100vw",
    overflowX: "hidden",
  },

  textField: {
    width: "17rem",
    marginTop: 20,
    flexGrow: 1,
    flexShrink: 1,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: 35,
    fontSize: 48,
    fontWeight: 500,
    fontFamily: "Playfair Display, serif",
    width: "90vw",
  },
  text: {
    textAlign: "center",
    width: "90vw",
    margin: 5,
    fontWeight: 300,
    fontSize: 22,
    fontFamily: "Poppins, serif",
  },

  button: {
    marginTop: 45,
    marginBottom: "3rem",
    textTransform: "none",
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 55,
    paddingRight: 55,
    fontSize: 21,
    fontFamily: "Poppins, serif",
  },
  logo: {
    width: 100,
    height: "auto",
  },
  nfb: {
    width: 100,
    height: "auto",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
    overflowX: "hidden",
    width: "100%",
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
}));

const Following = ({ story }) => {
  const classes = useStyles();
  const [display, setDisplay] = useState(true);
  const { width, setWidth } = useWitdh();
  const { user } = useContext(UserContext);

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        {profile.following.map((user) => {
          return <p>{user.firstname}</p>;
        })}
      </div>
    </div>
  );
};

export default Main;
