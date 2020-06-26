import { useContext, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
import ActionCall from "../Content/ActionCall";
// Hooks
import useLanguage from "../../../hooks/useLanguage";
import useWidth from "../../../hooks/useWidth";

const Main = () => {
  const { width, setWidth } = useWidth();

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      width: "100vw",
      margin: 0,
    },

    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
    },

    imageContainer: {
      display: "flex",
      width: "80%",
      alignItems: "center",
      marginTop: 30,
      marginBottom: 30,
    },
    image: {
      width: "100%",
      height: 600,
      objectFit: "cover",
    },
  }));
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

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ActionCall
          width={width}
          header={keys.header}
          text={keys.text}
          buttonText={truthy(keys.buttonText)}
          about={keys.about}
          discover={keys.discover}
        />
      </div>
    </div>
  );
};

export default Main;
