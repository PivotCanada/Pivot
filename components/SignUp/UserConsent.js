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
    width: "50%",
    borderRadius: 5,
  },

  header: {
    textAlign: "center",
    margin: 0,
    fontWeight: 700,
    color: "white",
    fontSize: 32,
    fontFamily: "Open Sans, sans-serif",
  },
  text: {
    textAlign: "center",

    margin: 40,
    fontWeight: 500,
    color: "white",
    fontSize: 20,
    fontFamily: "Open Sans, sans-serif",
  },
  loginButton: {
    fontFamily: "Open Sans, sans-serif",
    color: "white",
    textTransform: "none",
    marginLeft: 5,
  },
}));

function UserConsent() {
  const classes = useStyles();

  return (
    <form className={classes.wrapper}>
      <h1 className={classes.header}>Consent Form</h1>
      <p className={classes.text}>
        Please read the terms and conditions of using this website. This website
        is part of Pivot Project which is initiated by McGill University and
        National Film Board of Canada (NFB) to amplify leadership on climate
        change among SMEs. Content you share may be used by the research team
        for research purposes. No identifying information will be disseminated
        by the research team in scientific publications. [add anything else that
        we need to as per the ethics review board] . Please enter your email
        address and click on "Submit" button to accept these terms and
        conditions and agree to this consent form.
      </p>
      <p className={classes.text}>
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
