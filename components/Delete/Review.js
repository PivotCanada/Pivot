import { useEffect } from "react";
// Validation
import { validateDetails } from "../../utils/validation/validateDetails";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// Components
import Location from "./Location";
import Industry from "./Industry";
import Years from "./Years";
import Website from "./Website";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    overflow: "scroll",
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
    fontWeight: 500,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    width: "17rem",
    margin: 35,
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

function BusinessDetails({
  values,
  handleChange,
  handleDirectChange,
  step,
  setStep,
  handleErrors,
  errors,
}) {
  const classes = useStyles();

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        incrementForm(e, values, handleErrors, validateDetails, setStep);
      }}
    >
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Thanks {values.firstname}</h1>
        <p className={classes.text}>
          We are excited to share your story and inspire the country. Clicking
          next will send off your information so we can review it.
        </p>
      </div>
      <Navigation
        errors={errors}
        values={values}
        setStep={setStep}
        handleErrors={handleErrors}
        validation={validateDetails}
      />
    </form>
  );
}

export default BusinessDetails;
