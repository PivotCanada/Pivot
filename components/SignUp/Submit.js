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
    margin: 0,
    marginTop: 35,
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
  },
  email: {
    textAlign: "center",
    width: "17rem",
    margin: 0,
    marginTop: 30,
    fontWeight: 700,
    fontSize: 18,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

function Submit({
  values,
  handleChange,
  handleDirectChange,
  step,
  setStep,
  handleErrors,
  errors,
}) {
  useEffect(() => {}, [errors]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.header}>Thank You, {values.firstname}</h1>
        <p className={classes.text}>We will be sending you an email soon at</p>
        <p className={classes.email}>{values.email}</p>
        <p className={classes.text}>
          to make contact to learn more about {values.business}!
        </p>
      </div>
    </div>
  );
}

export default Submit;
