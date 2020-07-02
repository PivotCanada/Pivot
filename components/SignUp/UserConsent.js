import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// Components
import Navigation from "./Navigation";

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
  header: {
    textAlign: "center",
    margin: 0,
    fontWeight: 500,
    fontSize: 32,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",
    width: "17rem",
    margin: 40,
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "Open Sans, sans-serif",
  },
  loginButton: {
    color: "blue",
    textTransform: "none",
    marginLeft: 5,
  },
}));

function UserConsent() {
  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <h1 className={classes.header}>Wait a Sec!</h1>
      <p className={classes.text}>
        We will be reviewing your data, before reaching out to you. We will keep
        it safe. By moving forward, you agree to our terms.
      </p>
      <p>
        Already have an account?
        <Link href="/login">
          <Button className={classes.loginButton}>Login In</Button>
        </Link>
      </p>
      <Navigation type="next" />
    </form>
  );
}

export default UserConsent;
