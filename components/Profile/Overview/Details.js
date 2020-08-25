// Material UI
import { makeStyles } from "@material-ui/core/styles";

const Details = ({ profile, small }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: small ? "center" : "start",
      width: small ? 55 : "100%",
      width: 210,
      padding: 0,
      margin: 0,

      

      // marginBottom: small ? 10 : 15,
    },

    name: {
      color: "white",
      textAlign: small ? "center" : "left",
      fontFamily: "Poppins, sans-serif",
      fontWeight: small ? 400 : 700,
      fontSize: small ? 11 : 13,
      width: "100%",

      margin: 0,
      padding: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.name}>
        {profile.firstname} {profile.lastname}
      </h2>
    </div>
  );
};

export default Details;
