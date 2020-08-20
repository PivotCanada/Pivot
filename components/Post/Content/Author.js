// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "black",
    fontFamily: "Poppins, sans-sarif",
    fontWeight: 600,
    fontSize: 16,
    padding: 0,
    margin: 0,

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
