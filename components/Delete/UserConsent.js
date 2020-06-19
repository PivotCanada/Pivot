import { useEffect, useContext } from "react";
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
//Contexts
import { ModalContext } from "../../contexts/ModalContext";

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

  loginButton: {
    color: "blue",
    textTransform: "none",
    marginLeft: 5,
  },
}));

function UserCredentials({
  values,
  handleChange,
  setStep,
  handleErrors,
  errors,
}) {
  const { setShowOnboard } = useContext(ModalContext);
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
      <h1 className={classes.header}>There's No Going Back!</h1>
      <p className={classes.text}>
        Deleting your account will erase your story, and remove all connection
        you have.
      </p>

      <div className={classes.innerWrapper}></div>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            setStep((s) => s + 1);
          }}
        >
          Delete Account
        </Button>
      </div>
    </form>
  );
}

export default UserCredentials;
