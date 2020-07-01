import { useEffect, useState, useContext } from "react";
import Router from "next/router";
// Validation
import { validateDetails } from "../../utils/validation/validateDetails";
import { incrementForm } from "../../utils/validation/incrementForm";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import { CarouselContext } from "../UI/Carousel/contexts/CarouselContext";
// Utils
import { authenticate } from "../../utils/authentication/authenticate";
import { signup } from "./utils/signup";

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
  const { setUser, setAuthenticated, setToken } = useContext(UserContext);
  const { setShowLogin, setShowOnboard } = useContext(ModalContext);
  const { lastElement, index } = useContext(CarouselContext);
  const [error, setError] = useState({ value: false, message: "" });
  const data = {
    email: values.email,
    password: values.password,
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

  const onSumbit = () => {
    setSubmitting(true);
    // NOTE : reroute to `/home` upon sucessful login
    // TODO : configure functionality here for `persisted state` later on ...
    signup(data).then((response) => {
      console.log(response);
      // NOTE : check that response is successful
      if (response.status === "success") {
        authenticate({
          email: data.email,
          password: data.password,
        }).then((response) => {
          if (response.status === "success") {
            // NOTE : set `token`, `user`, `authenticated` state, in UserContext, upon sucessful login
            setToken(response.data.token);
            setUser(response.data.user);
            setAuthenticated(true);
            setShowOnboard(false);
            setShowLogin(false);
            console.log(response.data);
            Router.push("/");
          } else {
            console.log(response);
            setError({ value: true, message: response.message });
            setToken(null);
            setAuthenticated(false);
            setSubmitting(false);
          }
        });
      } else {
        console.log(response);
        setError({ value: true, message: response.message });
        setSubmitting(false);
      }
    });
  };

  useEffect(() => {
    console.log(lastElement());

    if (lastElement()) {
      onSumbit();
    } else {
      console.log("not yet");
    }
  }, [index]);

  const classes = useStyles();

  if (submitting) {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          <h1 className={classes.header}>Loading</h1>
          <p className={classes.text}>Just a Second!</p>
        </div>
      </div>
    );
  }

  if (error.value) {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          <h1 className={classes.header}>Error</h1>
          <p className={classes.text}>{error.message}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Submit;
