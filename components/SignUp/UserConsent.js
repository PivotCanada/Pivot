import { useEffect } from "react";
// Validation
import { validateCredentials } from "../../utils/validation/validateCredentials";
import { formatEmail } from "../../utils/validation/formatting";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// Components
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    alignItems: "center",
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
    alignItems: "center",
    overflow: "scroll",
  },
  header: {
    textAlign: "center",
    margin: 0,
    fontWeight: 500,
    fontSize: 32,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    width: "17rem",
    margin: 40,
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },

  buttonContainer: {
    display: "flex",
    marginTop: 10,
  },
}));

function UserCredentials({
  values,
  handleChange,
  setStep,
  handleErrors,
  errors,
}) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      //   onSubmit={(e) => {
      //     e.preventDefault();
      //     values.email = formatEmail(values.email);
      //     incrementForm(e, values, handleErrors, validateCredentials, setStep);
      //   }}
    >
      <h1 className={classes.header}>Wait a Sec!</h1>
      <p className={classes.text}>
        We will be reviewing your data, before reaching out to you. We will keep
        it safe. By moving forward, you agree to our terms.
      </p>
      <div className={classes.innerWrapper}></div>
      <div className={classes.buttonContainer}>
        <IconButton
          onClick={(e) => {
            setStep((s) => s + 1);
          }}
        >
          <ArrowForwardIcon className={classes.arrow} />
        </IconButton>
      </div>
    </form>
  );
}

export default UserCredentials;
