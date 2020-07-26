// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components

import Primary from "./Primary";
import Chips from "./Chips";
import Actions from "./Actions/Main";
import Overview from "./Overview";

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

function Preview({ post, setOpen, setOpenRepost }) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Overview author={post.author} date={post.created_at} />

      <Primary text={post.text} />
      <Chips tags={post.tags} />
      <Actions post={post} setOpen={setOpen} setOpenRepost={setOpenRepost} />
    </div>
  );
}

export default Preview;
