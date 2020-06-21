// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import Author from "./Author";
import Primary from "./Primary";
import Chips from "./Chips";
import Actions from "./Actions/Main";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    marginLeft: 10,
    width: "70%",
  },
}));

function Preview({ post, setOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Author author={post.author} />
      <Primary text={post.text} />
      <Chips tags={post.tags} />
      <Actions post={post} setOpen={setOpen} />
    </div>
  );
}

export default Preview;
