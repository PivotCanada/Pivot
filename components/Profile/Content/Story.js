// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  header: {
    textDecoration: "none",
    color: "grey",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    margin: 0,
    marginBottom: 25,
    marginTop: 30,
  },

  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    width: "95%",
    lineHeight: "32px",
    marginBottom: 40,
  },

  subheader: {
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    margin: 0,
  },
}));

function Story({ story }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Story</h1>
      <h2 className={classes.subheader}>Our Motivation</h2>
      <p className={classes.text}>{story.motivation}</p>
      <h2 className={classes.subheader}>Our Challenges</h2>
      <p className={classes.text}>{story.challenges}</p>
      <h2 className={classes.subheader}>Our Achievements</h2>
      <p className={classes.text}>{story.achievements}</p>
      <h2 className={classes.subheader}>Our Goals</h2>
      <p className={classes.text}>{story.goals}</p>
    </div>
  );
}

export default Story;
