import { useEffect } from "react";
// Validation
import { validateAchievements } from "../../utils/validation/validateAchievements";
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
        incrementForm(e, values, handleErrors, validateDetails, setStep);
      }}
    >
      <h1 className={classes.header}>Achievements</h1>
      <p className={classes.text}>
        Share your sustainability related achievements so far
      </p>
      <div className={classes.innerWrapper}>
        <TextField
          className={classes.textField}
          name="achievements"
          value={values.achievements}
          label="Tell Us Your Achievements!"
          multiline
          rows={10}
          variant="outlined"
          onChange={(e) => handleChange(e)}
          error={errors.achievements ? true : false}
          helperText={errors.achievements}
        />
      </div>
      <Navigation
        values={values}
        handleErrors={handleErrors}
        validation={validateAchievements}
      />
    </form>
  );
}

export default Achievements;
