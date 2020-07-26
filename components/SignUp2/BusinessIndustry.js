import { useEffect } from "react";
// Validation
import { validateIndustry } from "../../utils/validation/validateIndustry";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Industry from "./Industry";
import Navigation from "./Navigation";

function BusinessIndustry({
  values,
  handleDirectChange,
  handleErrors,
  errors,
}) {
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
      marginTop: "2rem",
      flexGrow: 1,
      flexShrink: 1,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      minHeight: "20rem",
    },
    header: {
      textAlign: "center",
      margin: 0,
      marginBottom: 20,
      fontWeight: 500,
      fontFamily: "Open Sans, sans-serif",
    },
    text: {
      textAlign: "center",
      width: "15rem",
      margin: 40,
      fontWeight: 500,
      fontSize: 16,
      color: values.industry === "" ? "black" : "green",
      fontFamily: "Open Sans, sans-serif",
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
  }));

  useEffect(() => {}, [errors]);

  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Industry</h1>
        <p className={classes.text}>
          {values.industry === ""
            ? "What is your business's industry?"
            : values.industry}
        </p>

        <Industry
          handleChange={handleDirectChange}
          errors={errors}
          values={values}
        />

        <Navigation
          values={values}
          handleErrors={handleErrors}
          validation={validateIndustry}
        />
      </div>
    </form>
  );
}

export default BusinessIndustry;
