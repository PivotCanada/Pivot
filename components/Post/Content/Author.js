// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    padding: 0,
    margin: 0,
    width: "100%",
    textAlign: "left",
    marginBottom: 10,
    marginTop: 5,
  },
}));

const Author = ({ author, date }) => {
  const classes = useStyles();

  return (
    <h2 className={classes.header}>
      {author.firstname} {author.lastname}
    </h2>
  );
};

export default Author;
