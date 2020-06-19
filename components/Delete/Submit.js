import { useEffect, useState, useContext } from "react";
import Router from "next/router";
// Validation

// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
// Contexts
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
// Utils
import { deleteAccount } from "./utils/delete";

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

function Submit({ submitting, setSubmitting }) {
  const { user, setUser, setAuthenticated, setToken } = useContext(UserContext);
  const { setShowDelete } = useContext(ModalContext);

  const [error, setError] = useState({ value: false, message: "" });

  useEffect(() => {
    setSubmitting(true);
    // NOTE : reroute to `/home` upon sucessful login
    // TODO : configure functionality here for `persisted state` later on ...
    deleteAccount(user._id).then((response) => {
      console.log(response);
      // NOTE : check that response is successful
      if (response.status === "success") {
        setUser(null);
        setAuthenticated(false);
        setToken(null);
        setSubmitting(false);
        setShowDelete(false);
        Router.push("/login");
        // TODO : Remove Cookie!
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
    return null;
  }
}

export default Submit;
