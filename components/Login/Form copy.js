import { useForm } from "../../hooks/useForm";
import Cookie from "js-cookie";
import { validateLogin } from "./utils/validateLogin";
import { authenticate } from "../../utils/authentication/authenticate";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import { formatEmail } from "../../utils/validation/formatting";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    minHeight: "90vh",
    overflow: "scroll",
  },
  textField: {
    width: "17rem",
    margin: "1rem",
    flexGrow: 1,
    flexShrink: 1,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: "10rem",
  },
  header: {
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
  },
  text: {
    textAlign: "center",
    width: "15rem",
    marginBottom: "1rem",
  },

  button: {
    marginTop: 25,
    marginBottom: 15,
    textTransform: "none",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 18,
    fontFamily: "Poppins, serif",
  },

  signupButton: {
    color: "blue",
    textTransform: "none",
    marginLeft: 5,
  },
}));

function LoginForm() {
  const classes = useStyles();
  const [error, setError] = useState({
    value: false,
    message: "",
  });

  const {
    setUser,
    token,
    setAuthenticated,
    setToken,
    authenticated,
  } = useContext(UserContext);

  const { setShowOnboard, setShowLogin } = useContext(ModalContext);

  const {
    errors,
    values,
    submitting,
    setSubmitting,
    handleChange,
    handleErrors,
  } = useForm({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    location: "",
  });

  useEffect(() => {
    // NOTE : reroute to `/home` upon sucessful login
    if (token !== null && token !== undefined) {
      Cookie.set("token", token);
    } else {
      Cookie.remove("token");
    }
  }, [token]);

  // TODO : Abstract `Loading` into a seperate component

  // TODO : Abstract `Error` into a seperate component

  if (error.value) {
    return <p className={classes.root}>{error.message}</p>;
  } else {
    return (
      <form
        className={classes.root}
        // onSubmit={async (e) => {
        //   e.preventDefault();

        //   // NOTE : With conditional logic, dependent on handleErros return value, async isn= neccessary since function must first
        //   //        await the response of handleErrors before procceding onto next statement, etc ...
        //   values.email = formatEmail(values.email);
        //   if (await handleErrors(values, validateLogin)) {
        //     authenticate(values).then((response) => {
        //       if (response.status === "success") {
        //         // NOTE : set `token`, `user`, `authenticated` state, in UserContext, upon sucessful login
        //         setToken(response.data.token);
        //         setUser(response.data.user);
        //         setAuthenticated(true);
        //         setLoading(false);
        //         Router.push("/home");
        //         setError({
        //           value: false,
        //           message: "",
        //         });
        //       } else {
        //         setToken(null);
        //         setAuthenticated(false);
        //         setError({
        //           value: true,
        //           message: response.message,
        //         });
        //         setSubmitting(false);
        //       }
        //     });
        //   }
        // }}
      >
        <h1 className={classes.header}>Welcome Back!</h1>
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
        </div>

        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={async () => {
            // TODO : Find out why this needs to be wrapped in an async ?
            // TODO : Determine if this design straetgy is okay -> using async function, even when no async is necessary ?
            values.email = formatEmail(values.email);
            if (await handleErrors(values, validateLogin)) {
              //   setLoading(true);
              authenticate(values).then((response) => {
                console.log(response);
                if (response.status === "success") {
                  const user = response.data.user;
                  const token = response.data.token;
                  // NOTE : set `token`, `user`, `authenticated` state, in UserContext, upon sucessful login
                  setToken(token);
                  setUser(user);
                  setAuthenticated(true);
                  // setShowOnboard(false);
                  // setShowLogin(false);
                  //   setLoading(false);
                  Router.push(`/profiles/${user._id}`);
                  setError({
                    value: false,
                    message: "",
                  });
                } else {
                  setToken(null);
                  setAuthenticated(false);
                  setError({
                    value: true,
                    message: response.message,
                  });
                  //   setLoading(false);
                }
              });
            }
          }}
        >
          Login
        </Button>
        <p>
          Don't have an account?
          <Link href="/signup">
            <Button
              onClick={() => {
                setShowOnboard(true);
              }}
              className={classes.signupButton}
            >
              Create One
            </Button>
          </Link>
        </p>
      </form>
    );
  }
}

export default LoginForm;
