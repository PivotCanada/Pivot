import { useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Components

// Contexts
import { ModalContext } from "../../contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: 75,
    width: "100vw",
    overflow: "scroll",
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
    marginBottom: 100,
  },
  header: {
    textAlign: "center",
    width: "80vw",
    marginBottom: 35,
    fontSize: 38,
    fontWeight: 500,
    fontFamily: "Playfair Display, serif",
  },
  text: {
    textAlign: "center",
    width: "60%",
    margin: 5,
    fontWeight: 300,
    fontSize: 20,
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
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "80vw",
    marginTop: 50,
  },
  info: {
    textAlign: "center",
    marginBottom: 35,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "Poppins, serif",
    color: "blue",
  },
}));

const Values = () => {
  const classes = useStyles();
  const { setShowOnboard } = useContext(ModalContext);

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        <p className={classes.info}>Who are we?</p>
        <h1 className={classes.header}>We are Pivot</h1>
        <p className={classes.text}>
          We are Pivot, an initative led by the National Film Board of Canada,
          and the McGill Sustainabilty Systems Intiative. We aim to amplify
          leadership on climate change among SMEs, by giving them a powerful
          voice.
        </p>
      </div>
      <p className={classes.info}>What's in it for You?</p>
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Write Canada's Histroy</h1>
        <p className={classes.text}>
          We are collecting the stories of innovative businesses who are leading
          the sustainabilty movement. Their stories will help inspire others to
          follow in thier footsteps, and write our country's history.
        </p>
      </div>
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Become a Hero</h1>
        <p className={classes.text}>
          Your story can be the reason people change thier lives, the reason
          this country becomes an environmental leader. You and your business
          can be the face of real change, recogized across the country.
        </p>
      </div>
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Exclusive Environmenal Network</h1>
        <p className={classes.text}>
          If your application is approved, you'll be invited to join Canada's
          leading environmental network, with access to industry leaders, and
          top field experts.
        </p>
      </div>

      <p className={classes.info}>What are you waiting for?</p>
    </div>
  );
};

export default Values;
