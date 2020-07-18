import { useEffect } from "react";
// Validation
import { validateDetails } from "../../utils/validation/validateDetails";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Navigation from "./Navigation";
// Contexts
import { CarouselContext } from "../UI/Carousel/contexts/CarouselContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 35,
    borderRadius: 5,
  },
  textField: {
    width: "17rem",
    marginTop: "4rem",
    flexGrow: 1,
    flexShrink: 1,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    margin: 0,
    fontSize: 50,
    color: "white",
    fontWeight: 700,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    margin: 25,
    color: "white",
    fontWeight: 500,
    fontSize: 22,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

function BusinessDetails({
  values,

  handleErrors,
}) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <form className={classes.root}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Thanks {values.firstname}</h1>
        <p className={classes.text}>
          We are excited to share your story and inspire the country. Clicking
          next will send off your information so we can review it.
        </p>
      </div>
      <Navigation />
    </form>
  );
}

export default BusinessDetails;
