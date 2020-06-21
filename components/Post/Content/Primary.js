// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans serif",
    fontWeight: 300,
    fontSize: 14,
    width: "100%",
    margin: 0,
  },
}));

const Primary = ({ text }) => {
  const classes = useStyles();
  return <p className={classes.description}>{text}</p>;
};

export default Primary;
