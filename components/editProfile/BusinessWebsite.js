import { useEffect, useContext } from "react";
// Validation
import { validateWebsite } from "../../utils/validation/validateWebsite";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Website from "./Website";
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
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    width: 275,
  },
  header: {
    textAlign: "left",
    width: "100%",
    margin: 0,
    fontSize: 28,
    color: "black",
    fontWeight: 700,
    marginBottom: 10,
    marginTop: 50,
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

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  buttonContainer: {
    display: "flex",
    marginBottom: 25,
    width: 200,
    justifyContent: "space-between",
  },
  industry: {
    textAlign: "left",
    width: "100%",
    margin: 0,
    fontSize: 20,
    color: "green",
    fontWeight: 700,
    marginTop: 25,
    fontFamily: "Noto Sans, sans-serif",
  },
  button: {
    textTransform: "none",
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "Open Sans, sans-serif",
    width: 150,
    margin: 0,
    marginTop: 20,
  },
}));

function BusinessIndustry({
  values,
  handleDirectChange,
  handleErrors,
  setStep,
  errors,
}) {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const handleSubmit = async () => {
    let valid = await handleErrors(values, validateWebsite);
    if (valid) {
      const data = { website: values.website };
      await update(data, user._id);
      setStep((s) => s + 1);
    }
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Your Website</h1>

        <p className={classes.text}>What is your business's website?</p>

        <Website
          handleChange={handleDirectChange}
          errors={errors}
          values={values}
        />
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>
    </form>
  );
}

export default BusinessIndustry;
