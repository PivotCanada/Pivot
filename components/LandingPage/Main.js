import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Components
import Card from "../Card";
import Values from "./Values";
// Contexts
import { ModalContext } from "../../contexts/ModalContext";
import Carousel from "./Carousel";
// Utils
import { fetchAllUsers } from "./utils/fetchAllUsers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: 75,
    marginBottom: 50,
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
    marginBottom: 10,
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

const data = [
  {
    index: 0,
    name: "Thomas Parker",
    role: "CEO of Drawn & Quarterly",
    description:
      "L’impact de la pandémie sur les restaurants a été graduel, alors que de plus en plus de clients annulaient leurs réservations",
    link: "",
    image:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    index: 1,
    name: "Sharon Mabey",
    role: "Owner of Mabey Later",
    description:
      "We’re both a community bike shop and also a location that people will travel to",
    link: "",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
  },
  {
    index: 2,
    name: "Stacey James",
    role: "CTO of Techo",
    description:
      "We’re both a technology shop and also a location that people will travel to, to build community",
    link: "",
    image:
      "https://images.unsplash.com/photo-1551989745-347c28b620e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

const Main = () => {
  const classes = useStyles();
  const [content, setContent] = useState([]);
  const { setShowOnboard, setShowLogin } = useContext(ModalContext);

  useEffect(() => {
    fetchAllUsers().then((response) => {
      console.log(response);
      setContent(response.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Lead Canada Forward</h1>
        <p className={classes.text}>
          Tell us how your business is tackling climate change.
        </p>
        <Button
          onClick={() => {
            setShowOnboard(true);
            setShowLogin(true);
          }}
          color="primary"
          className={classes.button}
          variant="contained"
        >
          Get started
        </Button>
        <Carousel content={content} />
        <Values />
        <h1 className={classes.header}>Lead Canada Forward</h1>
        <p className={classes.text}>
          Tell us how your business is tackling climate change.
        </p>
        <Button
          onClick={() => {
            setShowOnboard(true);
            setShowLogin(true);
          }}
          color="primary"
          className={classes.button}
          variant="contained"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Main;
