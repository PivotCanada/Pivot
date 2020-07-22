import { useEffect } from "react";
// Validation
import { validateChallanges } from "../../utils/validation/validateChallanges";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// Components
// import Location from "./Location";
// import Industry from "./Industry";
// import Years from "./Years";
// import Website from "./Website";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",

    padding: 35,
    borderRadius: 5,
  },
  textField: {
    width: "25rem",
    marginTop: 20,
    flexGrow: 1,
    flexShrink: 1,
    background: "white",
    borderRadius: 7,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    margin: 0,
    fontSize: 50,
    color: "white",
    fontWeight: 700,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    margin: 25,
    color: "white",
    fontWeight: 500,
    fontSize: 22,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

function Achievements({
  values,
  handleChange,
  step,
  setStep,
  handleErrors,
  errors,
}) {
  useEffect(() => {}, [errors]);
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        incrementForm(e, values, handleErrors, validateChallanges, setStep);
      }}
    >
      <h1 className={classes.header}>
        What are the Major Challenges that you faced in the pursuit of your
        sustainability goals?
      </h1>
      <p className={classes.text}>
        Please document the challenges that you encountered; which you overcame
        and those that you still face.
      </p>
      <div className={classes.innerWrapper}>
        <TextField
          className={classes.textField}
          name="challenges"
          value={values.challenges}
          label="Tell Us Your Challanges!"
          variant="filled"
          onChange={(e) => handleChange(e)}
          error={errors.challenges ? true : false}
          // helperText={errors.challenges}
        />
      </div>
      <Navigation
        values={values}
        handleErrors={handleErrors}
        validation={validateChallanges}
      />
    </form>
  );
}

export default Achievements;
