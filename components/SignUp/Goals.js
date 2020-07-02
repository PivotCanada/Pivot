import { useEffect } from "react";
// Validation
import { validateGoals } from "../../utils/validation/validateGoals";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// Components
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 35,
    borderRadius: 5,
  },
  textField: {
    width: "17rem",
    marginTop: 20,
    flexGrow: 1,
    flexShrink: 1,
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
    fontWeight: 500,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    width: "17rem",
    margin: 25,
    fontWeight: 500,
    fontSize: 16,
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
        incrementForm(e, values, handleErrors, validateGoals, setStep);
      }}
    >
      <h1 className={classes.header}>Goals</h1>
      <p className={classes.text}>What are your sustainability goals?</p>
      <div className={classes.innerWrapper}>
        <TextField
          className={classes.textField}
          name="goals"
          value={values.goals}
          label="What are your Goals!"
          multiline
          rows={10}
          variant="outlined"
          onChange={(e) => handleChange(e)}
          error={errors.goals ? true : false}
          helperText={errors.goals}
        />
      </div>
      <Navigation
        values={values}
        handleErrors={handleErrors}
        validation={validateGoals}
      />
    </form>
  );
}

export default Achievements;
