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
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    alignItems: "center",
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
    flexDirection: "column",
    marginTop: 10,
  },
  cancelButton: {
    marginBottom: 15,
    backgroundColor: "red",
    color: "white",
  },
}));

function UserCredentials({ handleClose, setStep }) {
  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <h1 className={classes.header}>There's No Going Back!</h1>
      <p className={classes.text}>
        Deleting your account will erase your story, and remove all connection
        you have.
      </p>

      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={classes.cancelButton}
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
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
