// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Container from "../../Post/Core/Container";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
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
  },
}));

function Posts({ posts, header }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* <h1 className={classes.header}>{header}</h1> */}
      <Container callback={false} data={posts} profile={true} />
    </div>
  );
}

export default Posts;
