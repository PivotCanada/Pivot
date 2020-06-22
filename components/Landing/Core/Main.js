import { useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import ActionCall from "../Content/ActionCall";
// Hooks
import useLanguage from "../../../hooks/useLanguage";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
    marginTop: 20,
  },

  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },

  imageContainer: {
    display: "flex",
    width: "45%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 600,
    objectFit: "cover",
  },
}));

const Main = () => {
  const classes = useStyles();
  const { keys, truthy, changeLanguage } = useLanguage({
    header: {
      english: "Lead Canada Forward",
      french: "Faire avancer le Canada",
    },
    text: {
      english: "Tell us how your business is tackling climate change.",
      french:
        "Partagez vos défis et vos pistes de solutions à la communauté d'entrepreneurs et aux décideurs.",
    },
    buttonText: {
      english: "Share Your Story",
      french: "Partagez votre histoire",
    },
    about: {
      english: "About",
      french: "à Propos",
    },
    discover: {
      english: "Discover",
      french: "Decouvrir",
    },
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ActionCall
          header={keys.header}
          text={keys.text}
          buttonText={truthy(keys.buttonText)}
          about={keys.about}
          discover={keys.discover}
        />
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
