import { useEffect, useState, useContext } from "react";
import Router from "next/router";
// Validation

// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
// Contexts
import { UserContext } from "../../contexts/UserContext";
// Utils
import { update } from "./utils/update";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    overflow: "scroll",
  },
  textField: {
    width: "17rem",
    marginTop: "4rem",
    flexGrow: 1,
    flexShrink: 1,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    margin: 0,
    marginTop: 35,
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
  },
  email: {
    textAlign: "center",
    width: "17rem",
    margin: 0,
    marginTop: 30,
    fontWeight: 700,
    fontSize: 18,
    fontFamily: "Open Sans, sans-serif",
  },

  button: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));

function Submit({ values, submitting, setSubmitting }) {
  const { user, setUser, setAuthenticated, setToken } = useContext(UserContext);

  const [error, setError] = useState({ value: false, message: "" });
  const data = {
    firstname: values.firstname,
    lastname: values.lastname,
    business: values.business,
    industry: values.industry,
    location: values.location,
    years: values.years,
    hasSite: values.hasSite,
    website: values.website,
    achievements: values.achievements,
    goals: values.goals,
    challenges: values.challenges,
    wish: values.wish,
  };

  useEffect(() => {
    setSubmitting(true);
    // NOTE : reroute to `/home` upon sucessful login
    // TODO : configure functionality here for `persisted state` later on ...
    update(data, user._id).then((response) => {
      console.log(response);
      // NOTE : check that response is successful
      if (response.status === "success") {
        setUser(response.data);
        setSubmitting(false);
      } else {
        console.log(response);
        setError({ value: true, message: response.message });
        setSubmitting(false);
      }
    });
  }, []);

  const classes = useStyles();

  if (submitting) {
    return <p>Loading</p>;
  }

  if (error.value) {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          <h1 className={classes.header}>Error</h1>
          <p className={classes.text}>
            Something went slightly wrong, we will reach out to you by email
            shortly!
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          <h1 className={classes.header}>Thanks {user.firstname}</h1>
          <p className={classes.text}>Your story has been updated</p>
        </div>
      </div>
    );
  }
}

export default Submit;
