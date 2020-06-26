// Material UI
import { makeStyles } from "@material-ui/core/styles";

const Details = ({ profile, small }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: small ? "center" : "start",
      width: small ? 55 : "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      marginTop: small ? 10 : 30,
    },

    name: {
      color: "black",
      textAlign: small ? "center" : "left",
      fontFamily: "Noto Sans, sans-serif",
      fontWeight: small ? 400 : 700,
      fontSize: small ? 11 : 14,
      width: "100%",
      margin: 0,
    },
    bio: {
      color: "black",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      width: "100%",
      marginTop: 10,
      lineHeight: 1.5,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.name}>
        {profile.firstname} {profile.lastname}
      </h2>
      {/* {small ? null : (
        <h2 className={classes.bio}>
          Entreprenuer, Engineer. Building the next genration of electric
          motors.
        </h2>
      )} */}
    </div>
  );
};

export default Details;
