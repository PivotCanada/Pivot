import { useState, useEffect, useContext } from "react";
// Validation
import { validateMotivation } from "../../utils/validation/validateMotivation";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Motivation from "./Motivation";
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
    width: 300,
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
    width: 125,
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
  const [displayCustom, setDisplayCustom] = useState(false);

  const handleSubmit = async () => {
    let valid = await handleErrors(values, validateMotivation);
    if (valid) {
      const data = { motivation: values.motivation };
      await update(data, user._id).then((response) => {
        console.log(response);
      });
      setStep((s) => s + 1);
    }
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Your Motivation</h1>

        <p className={classes.text}>
          {displayCustom
            ? "Write your custom motivation below"
            : "Why did you take this action - please choose your primary motivation from the list below"}
        </p>

        <Motivation
          displayCustom={displayCustom}
          setDisplayCustom={setDisplayCustom}
          handleChange={handleDirectChange}
          errors={errors}
          values={values}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "300",
          }}
        >
          <Button
            className={classes.button}
            variant={"contained"}
            style={{ width: 100 }}
            color={"primary"}
            size="small"
            onClick={handleSubmit}
          >
            Next
          </Button>
          {displayCustom ? (
            <Button
              className={classes.button}
              variant={"contained"}
              size="small"
              style={{ width: 165 }}
              color={"primary"}
              onClick={() => {
                setDisplayCustom(false);
                handleDirectChange("motivation", "");
              }}
            >
              Original Options
            </Button>
          ) : null}
        </div>
      </div>
    </form>
  );
}

export default BusinessIndustry;
