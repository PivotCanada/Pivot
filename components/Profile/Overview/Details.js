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
