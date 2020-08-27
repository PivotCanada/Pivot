import { useEffect, useRef } from "react";
// Validation
import { validateLocation } from "../../utils/validation/validateLocation";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Location from "./Location";
import Navigation from "./Navigation";

function BusinessDetails({
  values,
  handleDirectChange,
  setStep,
  handleErrors,
  errors,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
      borderRadius: 5,
    },
    textField: {
      width: "17rem",
      margin: 15,
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
      color: values.location === "" ? "black" : "green",
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

  useEffect(() => {}, [errors]);

  const Ref = useRef(null);
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        incrementForm(e, values, handleErrors, validateLocation, setStep);
      }}
    >
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Where is Your Business?</h1>
        <p className={classes.text}>
          {values.location === "" ? "Select a city" : values.location}
        </p>

        <Location
          handleChange={handleDirectChange}
          errors={errors}
          values={values}
        />

        {/* <Navigation
          values={values}
          handleErrors={handleErrors}
          validation={validateLocation}
        /> */}
      </div>
    </form>
  );
}

export default BusinessDetails;
