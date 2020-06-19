import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "./Card";
import MobileCard from "./MobileCard";
import Carousel from "./Carousel";
import Search from "./Search";

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

const Main = () => {
  const classes = useStyles();
  const [content, setContent] = useState([]);
  const [display, setDisplay] = useState(true);
  const { width, setWidth } = useWitdh();
  const { user } = useContext(UserContext);

  // TODO : Replace with HOC ( I really mean Hook! ) functionality ...

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    fetchAllUsers().then((response) => {
      console.log(response);
      setContent(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  useEffect(() => {}, [display]);

  if (width > 950) {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          <Search setDisplay={setDisplay} />
          {content.map((user) => {
            return <Carousel display={display} key={user._id} story={user} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          {content.map((user) => {
            return <MobileCard key={user._id} story={user} />;
          })}
        </div>
      </div>
    );
  }
};

export default Main;
