// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 12,
    padding: 0,
    margin: 0,
    width: "100%",
    textAlign: "left",
    marginTop: 15,
    marginBottom: 5,
  },
}));

const Author = ({ title }) => {
  const classes = useStyles();
  if (title) {
    return <h2 className={classes.header}>{title}</h2>;
  } else {
    return null;
  }
};

export default Author;
