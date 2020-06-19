import { useEffect } from "react";
// Validation
import { validateCredentials } from "../../utils/validation/validateCredentialsV2";
import { formatEmail } from "../../utils/validation/formatting";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// Components
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "80vh",
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
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    width: "17rem",
    margin: 40,
    fontWeight: 500,
    fontSize: 16,
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
}));

function UserCredentials({
  values,
  handleChange,
  setStep,
  handleErrors,
  errors,
}) {
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
      <h1 className={classes.header}>Who Are You?</h1>
      <p className={classes.text}>Tell us about yourself to get started</p>
      <div className={classes.innerWrapper}>
        <TextField
          className={classes.textField}
          type="email"
          name="email"
          value={values.email}
          label="Email"
          onChange={(e) => handleChange(e)}
          error={errors.email ? true : false}
          helperText={errors.email}
          // variant="outlined"
        />
        <TextField
          className={classes.textField}
          type="password"
          name="password"
          value={values.password}
          label="Password"
          onChange={(e) => handleChange(e)}
          error={errors.password ? true : false}
          helperText={errors.password}
          // variant="outlined"
        />
        <TextField
          className={classes.textField}
          name="firstname"
          value={values.firstname}
          label="First Name"
          onChange={(e) => handleChange(e)}
          error={errors.firstname ? true : false}
          helperText={errors.firstname}
          // variant="outlined"
        />
        <TextField
          className={classes.textField}
          name="lastname"
          value={values.lastname}
          label="Last Name"
          onChange={(e) => handleChange(e)}
          error={errors.lastname ? true : false}
          helperText={errors.lastname}
          // variant="outlined"
        />

        {/* <TextField
          className={classes.textField}
          name="role"
          value={values.role}
          label="Role at Company"
          onChange={(e) => handleChange(e)}
          error={errors.role ? true : false}
          helperText={errors.role}
          variant="outlined"
        /> */}
      </div>
      <div className={classes.buttonContainer}>
        <IconButton
          onClick={(e) => {
            values.email = formatEmail(values.email);
            incrementForm(
              e,
              values,
              handleErrors,
              validateCredentials,
              setStep
            );
          }}
        >
          <ArrowForwardIcon className={classes.arrow} />
        </IconButton>
      </div>
    </form>
  );
}

export default UserCredentials;
