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
    minHeight: "80vh",
    overflow: "scroll",
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
        incrementForm(e, values, handleErrors, validateChallanges, setStep);
      }}
    >
      <h1 className={classes.header}>Challenges</h1>
      <p className={classes.text}>
        What challenges do you face in becoming more sustainable?
      </p>
      <div className={classes.innerWrapper}>
        <TextField
          className={classes.textField}
          name="challenges"
          value={values.challenges}
          label="Tell Us Your Challanges!"
          multiline
          rows={10}
          variant="outlined"
          onChange={(e) => handleChange(e)}
          error={errors.challenges ? true : false}
          helperText={errors.challenges}
        />
      </div>
      <Navigation
        errors={errors}
        values={values}
        setStep={setStep}
        handleErrors={handleErrors}
        validation={validateChallanges}
      />
    </form>
  );
}

export default Achievements;
