import { useContext } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import Link from "next/link";
// Validation
import { validateCredentials } from "../../utils/validation/validateCredentials";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// Contexts
import { UserContext } from "../../contexts/UserContext";
// Utils
import { signup } from "./utils/signup";
import { authenticate } from "../../utils/authentication/authenticate";
import { incrementForm } from "../../utils/validation/incrementForm";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    borderRadius: 5,
    backgroundColor: "white",
  },
  innerWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
  },
  textField: {
    width: 275,
    marginBottom: 17,
    flexGrow: 1,
    flexShrink: 1,
    border: "1px solid white",
    borderRadius: 3,
  },
  formContainerR: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    marginTop: "5%",
    borderRadius: 10,
    height: "90%",
    width: "90%",
  },
  formContainerL: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "5%",
    width: "90%",
    height: "90%",
    
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    height: "100vh",
    zIndex: 2,
  },
  
  containerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    height: "100vh",
    zIndex: 2,
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    position: "fixed",
    
    zIndex: 0,
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
  formHeaderR: {
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins, sans-sarif",
    fontWeight: 500,
    fontSize: 50,
  },
  formHeaderL: {
    textAlign: "center",
    color: "black",
    fontFamily: "Poppins, sans-sarif",
    fontWeight: 500,
    fontSize: 50,
  },
  text: {
    textAlign: "left",
    margin: 0,
    width: "100%",
    color: "white",

    color: "#A1A1A1",
    fontWeight: 500,
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
    marginBottom: 25,
  },
  inputElement: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    
  },
  inputHeaderR: {
    color: "white",
    fontWeight: 700,
    margin: 0,
    marginBottom: 5,
    fontSize: 11,
    fontFamily: "Open Sans, sans-serif",
  },
  inputHeaderL: {
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
    fontSize: 16,
    fontFamily: "Open Sans, sans-serif",
    width: 275,
    marginTop: 15,
    color: "black",
    
  },
  icon: {
    position: "fixed",
    width: "100px",
    
    marginTop: 10,
    marginLeft: 20,
    "&:hover": {
      opacity: 0.4,
      cursor: "pointer",
    },
    border: "3px solid red"

  },
  logo:{
    marginTop: 20,
    border: "3px solid red"
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
  inputR:{
    color: "white"
  },
  inputL:{
    color: "black"
  },
  
}));

function UserCredentials({
  values,
  handleChange,
  handleDirectChange,
  handleErrors,
  errors,
}) {
  const classes = useStyles();
  const { setUser, setAuthenticated, setToken } = useContext(UserContext);

  const handleSubmit = async () => {
    let valid = await handleErrors(values, validateCredentials);
    if (valid) {
      await createUser();
    }
  };

  const createUser = () => {
    const data = {
      email: values.email,
      password: values.password,
      firstname: values.firstname,
      lastname: values.lastname,
    };

    // NOTE : reroute to `/` upon sucessful login
    // TODO : configure functionality here for `persisted state` later on ...
    signup(data).then((response) => {
      console.log(response);
      // NOTE : check that response is successful
      if (response.status === "success") {
        authenticate({
          email: data.email,
          password: data.password,
        }).then(async (response) => {
          if (response.status === "success") {
            // NOTE : set `token`, `user`, `authenticated` state, in UserContext, upon sucessful login
            let token = response.data.token;
            let user = response.data.user;
            Cookie.set("token", token);
            setToken(token);
            setUser(user);
            setAuthenticated(true);

            console.log(response.data);
            Router.push(`/`);
          } else {
            console.log(response);

            setToken(null);
            setAuthenticated(false);
          }
        });
      } else {
        console.log(response);
      }
    });
  };


 
  return (
<div className = {classes.wrapper}>
    <Link className = {classes.logo}href="/">
            <img
              className={classes.icon}
              src="https://pivot.nyc3.digitaloceanspaces.com/Logo.svg"
              alt="icon"
            />
          </Link>
    <form className={classes.innerWrapper}>
    { <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80"
        />}
      <div className={classes.containerLeft}>
         
        <div className={classes.formContainerL}>
          
          {/* <h1 className={classes.header}>Welcome</h1> */}
          <p className={classes.formHeaderL}>
              Login
          </p>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderL}>First Name</h2>
            
            <TextField
              inputProps={{ className: classes.inputL}}
              className={classes.textField}
              size="small"
              name="firstname"
              value={values.firstname}
              color = "#fffffff"
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.firstname ? true : false}
              helperText={errors.firstname}
            />
            
            
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderL}>Last Name</h2>
            <TextField
              sinputProps={{ className: classes.inputL}}
              size="small"
              name="lastname"
              className={classes.textField}
              value={values.lastname}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.lastname ? true : false}
              helperText={errors.lastname}
            />
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderL}>Email</h2>
            <TextField
            inputProps={{ className: classes.inputL}}
              className={classes.textField}
              type="email"
              name="email"
              size="small"
              color="white"
              value={values.email}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderL}>Password</h2>
            <TextField
              inputProps={{ className: classes.inputL}}
              className={classes.textField}
              type="password"
              name="password"
              size="small"
              value={values.password}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.password ? true : false}
              helperText={errors.password}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={values.consent}
                  color="primary"
                  onChange={() =>
                    handleDirectChange("consent", !values.consent)
                  }
                />
              }
            />
            {!errors.consent ? (
              <p className={classes.checkbox}>
                Creating an account means you’re okay with our {""}
                <a
                  className={classes.link}
                  target="_blank"
                  href="https://dribbble.com/terms"
                >
                  Terms of Service
                </a>
              </p>
            ) : (
              <p className={classes.checkboxError}>
                {errors.consent}{" "}
                <a
                  className={classes.link}
                  target="_blank"
                  href="https://dribbble.com/terms"
                >
                  Terms of Service
                </a>
              </p>
            )}
          </div>

          <Button
            className={classes.button}
            variant={"outlined"}
            color={"primary"}
            onClick={handleSubmit}
            
          >
            Continue
          </Button>
        </div>
      </div>


      <div className={classes.containerRight}>
      
        <div className={classes.formContainerR}>
          
          {/* <h1 className={classes.header}>Welcome</h1> */}
          <p className={classes.formHeaderR}>
              Sign Up
          </p>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderR}>First Name</h2>
            <TextField
              inputProps={{ className: classes.inputR}}
              className={classes.textField}
              size="small"
              name="firstname"
              value={values.firstname}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.firstname ? true : false}
              helperText={errors.firstname}
            />
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderR}>Last Name</h2>
            <TextField
            inputProps={{ className: classes.inputR}}
              size="small"
              name="lastname"
              className={classes.textField}
              value={values.lastname}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.lastname ? true : false}
              helperText={errors.lastname}
            />
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderR}>Email</h2>
            <TextField
            inputProps={{ className: classes.inputR}}
              className={classes.textField}
              type="email"
              name="email"
              size="small"
              value={values.email}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </div>
          <div className={classes.inputElement}>
            <h2 className={classes.inputHeaderR}>Password</h2>
            <TextField
            inputProps={{ className: classes.inputR}}
              className={classes.textField}
              type="password"
              name="password"
              size="small"
              value={values.password}
              variant={"outlined"}
              onChange={(e) => handleChange(e)}
              error={errors.password ? true : false}
              helperText={errors.password}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={values.consent}
                  color="primary"
                  onChange={() =>
                    handleDirectChange("consent", !values.consent)
                  }
                />
              }
            />
            {!errors.consent ? (
              <p className={classes.checkbox}>
                Creating an account means you’re okay with our {""}
                <a
                  className={classes.link}
                  target="_blank"
                  href="https://dribbble.com/terms"
                >
                  Terms of Service
                </a>
              </p>
            ) : (
              <p className={classes.checkboxError}>
                {errors.consent}{" "}
                <a
                  className={classes.link}
                  target="_blank"
                  href="https://dribbble.com/terms"
                >
                  Terms of Service
                </a>
              </p>
            )}
          </div>

          <Button
            inputProps = {{className: classes.R}}
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            onClick={handleSubmit}
          >
            Begin My Journey
          </Button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default UserCredentials;
