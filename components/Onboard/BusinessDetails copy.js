import { useEffect, useRef } from "react";
// Validation
import { validateDetails } from "../../utils/validation/validateDetails";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
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
    width: 275,
    margin: 0,
    marginBottom: 17,
    flexGrow: 1,
    flexShrink: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    width: 275,
  },
  header: {
    textAlign: "left",
    width: "100%",
    margin: 0,
    fontWeight: 700,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "left",
    width: "100%",
    margin: 0,
    marginBottom: 20,
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "Open Sans, sans-serif",
    width: 275,
    marginTop: 15,
  },
  inputElement: {
    display: "flex",
    flexDirection: "column",
  },
  inputHeader: {
    color: "black",
    fontWeight: 700,
    margin: 0,
    marginBottom: 5,
    fontSize: 11,
    fontFamily: "Open Sans, sans-serif",
  },
}));

function BusinessDetails({ values, handleChange, handleErrors, errors }) {
  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Your Business</h1>
        <p className={classes.text}>Tell us about your business</p>
        <div className={classes.inputElement}>
          <h2 className={classes.inputHeader}>Business Name</h2>
          <TextField
            className={classes.textField}
            name="business"
            value={values.business}
            size={"small"}
            variant={"outlined"}
            onChange={(e) => handleChange(e)}
            error={errors.business ? true : false}
            helperText={errors.business}
          />
        </div>
        <div className={classes.inputElement}>
          <h2 className={classes.inputHeader}>Years in Business</h2>
          <TextField
            className={classes.textField}
            name="years"
            value={values.years}
            size={"small"}
            variant={"outlined"}
            onChange={(e) => handleChange(e)}
            error={errors.years ? true : false}
            helperText={errors.years}
          />
        </div>
        {/* <Navigation
          values={values}
          handleErrors={handleErrors}
          validation={validateDetails}
        /> */}
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={() => {}}
        >
          Next
        </Button>
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={() => setDisplayCustom(true)}
        >
          Original Options
        </Button>
      </div>
    </form>
  );
}

export default BusinessDetails;
