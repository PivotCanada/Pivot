// Material UI
import { makeStyles } from "@material-ui/core/styles";

const Location = ({ profile, small }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: small ? "center" : "start",
      width: small ? 55 : "100%",
      width: 210,
      padding: 0,
      margin: 0,
      marginTop: 2.5,

      // marginBottom: small ? 10 : 15,
    },

    location: {
      color: "rgba(255,255,255,0.5)",
      letterSpacing: 1.5,
      textAlign: small ? "center" : "left",
      fontFamily: "Poppins, sans-serif",
      fontWeight: small ? 400 : 400,
      fontSize: small ? 11 : 12,
      width: "100%",
      margin: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.location}>{profile.location}</h2>
      

    </div>
  );
};

export default Location;
