import { useEffect } from "react";
// Validation
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Components

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    margin: 0,
    marginTop: 25,
    width: "17rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Navigation({ values, setStep, handleErrors, errors, validation }) {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <IconButton
        onClick={() => {
          setStep((s) => s - 1);
        }}
      >
        <ArrowBackIcon className={classes.arrow} />
      </IconButton>
      <IconButton
        onClick={(e) => {
          incrementForm(e, values, handleErrors, validation, setStep);
        }}
      >
        <ArrowForwardIcon className={classes.arrow} />
      </IconButton>
    </div>
  );
}

export default Navigation;
