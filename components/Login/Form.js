import { useState, useContext, useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import Link from "next/link";
// Validation
import { validateLogin } from "./utils/validateLogin";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton } from "@material-ui/core";

// Hooks
import { useForm } from "../../hooks/useForm";
// Contexts
import { UserContext } from "../../contexts/UserContext";
// Utils

import { authenticate } from "../../utils/authentication/authenticate";
import { formatEmail } from "../../utils/validation/formatting";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",

    display: "flex",
    alignItems: "center",
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

    width: 275,
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    width: "50%",
    height: "100vh",
  },
  containerRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  // header: {
  //   textAlign: "left",
  //   width: "100%",
  //   margin: 0,
  //   fontSize: 28,
  //   color: "black",
  //   fontWeight: 700,
  //   marginBottom: 10,
  //   fontFamily: "Noto Sans, sans-serif",
  // },
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
    width: 275,
    marginTop: 15,
  },
  icon: {
    width: "60px",
    height: "auto",
    marginBottom: 15,
    "&:hover": {
      opacity: 0.4,
      cursor: "pointer",
    },
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

function UserCredentials({}) {
  const classes = useStyles();
  const { setUser, setAuthenticated, setToken, setLoading } = useContext(
    UserContext
  );
  const { errors, values, handleChange, handleErrors } = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const login = async () => {
    values.email = formatEmail(values.email);
    authenticate(values).then(async (response) => {
      if (response.status === "success") {
        console.log(response);
        const user = response.data.user;
        const token = response.data.token;
        Cookie.set("token", token);
        setToken(token);
        setUser(user);
        setAuthenticated(true);
        setLoading(false);
        // setError({
        //   value: false,
        //   message: "",
        // });
        Router.push("/");
      } else {
        setToken(null);
        setAuthenticated(false);
        setError({
          value: true,
          message: response.message,
        });
      }
    });
  };

  const handleLogin = async () => {
    let valid = await handleErrors(values, validateLogin);
    if (valid) {
      login();
    }
  };

  // NOTE : reroute to `/` upon sucessful login
  // TODO : configure functionality here for `persisted state` later on ...

  return (
    <form className={classes.wrapper}>
      <div className={classes.containerLeft}>
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1549448380-10cbfd2c1e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
      </div>
      <div className={classes.containerRight}>
        <div className={classes.container}>
          <Link href="/">
            <img
              className={classes.icon}
              src="https://pivot.nyc3.digitaloceanspaces.com/Logo.svg"
              alt="icon"
            />
          </Link>
          {/* <h1 className={classes.header}>Welcome</h1> */}
          <p className={classes.text}>
            Welcome back, continue your journey, or{" "}
            <a className={classes.link} href="/signup">
              Sign up
            </a>{" "}
            and begin yours
          </p>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeader}>Email</h2>
            <TextField
              className={classes.textField}
              type="email"
              name="email"
              value={values.email}
              variant={"outlined"}
              size={"small"}
              onChange={(e) => handleChange(e)}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeader}>Password</h2>
            <TextField
              className={classes.textField}
              type="password"
              name="password"
              value={values.password}
              variant={"outlined"}
              size={"small"}
              onChange={(e) => handleChange(e)}
              error={errors.password ? true : false}
              helperText={errors.password}
            />
          </div>

          <Button
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            onClick={handleLogin}
          >
            Continue My Journey
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UserCredentials;
