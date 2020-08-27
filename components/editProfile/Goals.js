import { useContext } from "react";
// Validation
import { validateGoals } from "../../utils/validation/validateGoals";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
// Contexts
import { UserContext } from "../../contexts/UserContext";
// Utils
import { update } from "../../utils/general/update";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: 400,
    display: "flex",
    margin: 0,
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "white",
  },
  textField: {
    width: 275,
    marginBottom: 17,
    flexGrow: 1,
    flexShrink: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",

    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    width: 275,
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",

    backgroundColor: "white",
  },
  containerRight: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    width: "50%",

    width: "50%",
    height: "100vh",
  },
  image: {
    objectFit: "cover",
    height: "100%",
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
  },
  header: {
    textAlign: "left",
    width: "100%",
    margin: 0,
    fontSize: 28,
    color: "black",
    fontWeight: 700,
    marginBottom: 10,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "left",
    margin: 0,
    width: "100%",
    color: "#A1A1A1",
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
    marginBottom: 25,
  },
  inputElement: {
    display: "flex",
    flexDirection: "column",
  },
  inputHeader: {
    color: "black",
    fontWeight: 700,
    margin: 0,
    marginBottom: 5,
    fontSize: 11,
    fontFamily: "Open Sans, sans-serif",
  },
  button: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "Open Sans, sans-serif",
    width: 150,
  },
  icon: {
    width: "60px",
    height: "auto",
    marginBottom: 15,
  },
  checkbox: {
    fontWeight: 500,
    fontSize: 12,
    fontFamily: "Open Sans, sans-serif",
    margin: 0,
  },
  checkboxError: {
    fontWeight: 500,
    fontSize: 12,
    color: "red",
    margin: 0,

    fontFamily: "Open Sans, sans-serif",
  },
  link: {
    textDecoration: "none",
    color: "blue",
    "&:hover": {
      opacity: 0.6,
    },
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
  const { user } = useContext(UserContext);

  const handleSubmit = async () => {
    let valid = await handleErrors(values, validateGoals);
    if (valid) {
      const data = { goals: values.goals };
      await update(data, user._id);
      setStep((s) => s + 1);
    }
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Your Goals</h1>
        <p className={classes.text}>
          What’s your next step - tell us a future sustainability-related goal
          for your business.
        </p>
        <div className={classes.inputElement}>
          <h2 className={classes.inputHeader}>Goals</h2>
          <TextField
            label = {values.goals}
            className={classes.textField}
            name="goals"
            value={values.goals}
            size={"small"}
            variant={"outlined"}
            multiline
            rows={5}
            onChange={(e) => handleChange(e)}
            error={errors.goals ? true : false}
            helperText={errors.goals}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: 275,
            justifyContent: "space-between",
          }}
        >
          <Button
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            style={{ width: 100 }}
            color={"primary"}
            onClick={() => setStep((s) => s + 1)}
          >
            Skip
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UserCredentials;
