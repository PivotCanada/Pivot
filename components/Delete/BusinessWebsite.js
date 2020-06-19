import { useEffect, useRef } from "react";
// Validation
import { validateDetails } from "../../utils/validation/validateDetails";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

// Components
import Location from "./Location";
import Industry from "./Industry";
import Years from "./Years";
import Website from "./Website";
import Navigation from "./Navigation";

function BusinessWebsite({
  values,
  handleChange,
  handleDirectChange,
  step,
  setStep,
  handleErrors,
  errors,
}) {
  useEffect(() => {}, [errors]);

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
      marginTop: "2rem",
      flexGrow: 1,
      flexShrink: 1,
    },
    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      margin: 0,
      marginBottom: 50,
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
    },
    text: {
      textAlign: "center",
      width: "15rem",
      marginBottom: 75,
      fontWeight: 500,
      fontSize: 16,
      color: values.website === "" ? "black" : "green",
      fontFamily: "Open Sans, sans-serif",
    },

    button: {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
    buttonContainer: {
      display: "flex",
      marginBottom: 25,
      width: 200,
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        incrementForm(e, values, handleErrors, validateDetails, setStep);
      }}
    >
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Company Website</h1>
        <p className={classes.text}>
          {values.website === "" || !values.hasSite
            ? "What's your website?"
            : values.website}
        </p>
        <Website
          handleChange={handleDirectChange}
          errors={errors}
          values={values}
        />
        <Navigation
          errors={errors}
          values={values}
          setStep={setStep}
          handleErrors={handleErrors}
          validation={validateDetails}
        />
      </div>
    </form>
  );
}

export default BusinessWebsite;
