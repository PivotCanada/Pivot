// Material UI
import { makeStyles } from "@material-ui/core/styles";

const Details = ({ profile, small }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: small ? "center" : "start",
      width: small ? 55 : 215,

      padding: 0,
      margin: 0,

      marginTop: 2.5,
      // marginBottom: small ? 10 : 15,
    },

    description: {
      color: "black",
      textAlign: small ? "center" : "left",
      fontFamily: "Noto Sans, sans-serif",
      fontWeight: small ? 400 : 400,
      fontSize: small ? 11 : 12,
      width: "90%",
      margin: 0,
      padding: 0,
      marginTop: 20,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.description}>
        Dieter Rams is a German industrial designer and retired academic closely
        associated with the consumer products company Braun, the furniture
        company Vitsœ, and the functionalist school of industrial design
      </h2>
    </div>
  );
};

export default Details;
