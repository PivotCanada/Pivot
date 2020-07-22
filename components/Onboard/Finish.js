import { useEffect, useContext } from "react";
import Router from "next/router";
// Validation
import { validateWebsite } from "../../utils/validation/validateWebsite";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Contexts
import { UserContext } from "../../contexts/UserContext";

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

    width: 275,
  },
  header: {
    textAlign: "left",
    width: "100%",
    margin: 0,
    fontSize: 28,
    color: "black",
    fontWeight: 700,
    marginBottom: 17,
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
    marginBottom: 12,
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
    marginTop: 15,
  },
}));

function BusinessIndustry({}) {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Start your journey </h1>
        <p className={classes.text}>
          Thanks {user.firstname}, now others can learn a little bit about you.
        </p>

        <p className={classes.text}>
          Begin your journey by exploring what others are up to.
        </p>

        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={() => {
            Router.reload();
          }}
        >
          Begin journey
        </Button>
      </div>
    </form>
  );
}

export default BusinessIndustry;
