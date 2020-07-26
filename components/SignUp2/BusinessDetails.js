import { useEffect, useRef } from "react";
// Validation
import { validateDetails } from "../../utils/validation/validateDetails";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

// Components
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  wrapper: {
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
    marginTop: "2rem",
    flexGrow: 1,
    flexShrink: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "20rem",
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
    margin: 40,
    fontWeight: 500,
    fontSize: 16,
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

function BusinessDetails({ values, handleChange, handleErrors, errors }) {
  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Your Business</h1>
        <p className={classes.text}>Tell us about your business</p>
        <TextField
          className={classes.textField}
          name="business"
          value={values.business}
          label="Business Name"
          onChange={(e) => handleChange(e)}
          error={errors.business ? true : false}
          helperText={errors.business}
        />

        <TextField
          className={classes.textField}
          name="years"
          value={values.years}
          label="Years in Business"
          onChange={(e) => handleChange(e)}
          error={errors.years ? true : false}
          helperText={errors.years}
        />

        <Navigation
          values={values}
          handleErrors={handleErrors}
          validation={validateDetails}
        />
      </div>
    </form>
  );
}

export default BusinessDetails;
