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
        incrementForm(e, values, handleErrors, validateGoals, setStep);
      }}
    >
      <h1 className={classes.header}>What Are My Sustainability Goals</h1>
      <p className={classes.text}>
        Think about the 1-2 important goals that you have been pursuing to
        become more sustainable.
      </p>
      <div className={classes.innerWrapper}>
        <TextField
          className={classes.textField}
          name="goals"
          value={values.goals}
          label="What are your Goals!"
          variant="filled"
          onChange={(e) => handleChange(e)}
          error={errors.goals ? true : false}
          // helperText={errors.goals}
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
