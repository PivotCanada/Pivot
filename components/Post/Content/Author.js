// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "black",
    fontFamily: "Cairo, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    padding: 0,
    margin: 0,
    marginLeft: 15,
    textAlign: "left",
    marginBottom: 5,
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
