// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Container from "../../Post/Core/Container";

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
}));

function Posts({ posts, header }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>{header}</h1>
      <Container callback={false} data={posts} profile={true} />
    </div>
  );
}

export default Posts;
