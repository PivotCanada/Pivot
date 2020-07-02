// Validation
import { validateCredentials } from "../../utils/validation/validateCredentialsV2";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton } from "@material-ui/core";
// Components
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  textField: {
    width: "17rem",
    margin: 15,
    flexGrow: 1,
    flexShrink: 1,
  },
  container: {
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
}));

function UserCredentials({ values, handleChange, handleErrors, errors }) {
  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <h1 className={classes.header}>Who Are You?</h1>
      <p className={classes.text}>Tell us about yourself to get started</p>
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          type="email"
          name="email"
          value={values.email}
          label="Email"
          onChange={(e) => handleChange(e)}
          error={errors.email ? true : false}
          helperText={errors.email}
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
        />
        <TextField
          className={classes.textField}
          name="firstname"
          value={values.firstname}
          label="First Name"
          onChange={(e) => handleChange(e)}
          error={errors.firstname ? true : false}
          helperText={errors.firstname}
        />
        <TextField
          className={classes.textField}
          name="lastname"
          value={values.lastname}
          label="Last Name"
          onChange={(e) => handleChange(e)}
          error={errors.lastname ? true : false}
          helperText={errors.lastname}
        />
      </div>
      <Navigation
        values={values}
        handleErrors={handleErrors}
        validation={validateCredentials}
      />
    </form>
  );
}

export default UserCredentials;
