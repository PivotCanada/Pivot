import { useContext } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components

import Primary from "./Primary";
import Chips from "./Chips";
import Actions from "./Actions/Main";
import Overview from "./Overview";
import Title from "./Title";
import MicroLink from "./MicroLink";

// Contexts
import { ModalContext } from "../../../contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    margin: 0,

    width: "95%",
  },
  linkWrapper: {
    textDecoration: "none",
    "&:hover": {
      opacity: 0.6,
      cursor: "pointer",
    },
    padding: 0,
    margin: 0,
  },
}));

function Preview({ post, setOpenRepost }) {
  const classes = useStyles();
  const { open = false, setOpen, setId } = useContext(ModalContext);

  return (
    <div className={classes.content}>
      <Overview author={post.author} date={post.created_at} />
      {post.link ? <MicroLink link={post.link} /> : null}

      <div
        onClick={() => {
          setOpen(true);
          setId(post._id);
        }}
        className={classes.linkWrapper}
        href={`posts/${post._id}`}
      >
        {/* <Title title={"Rebounce in Employment 2020"} /> */}
        <Primary text={post.text} />
        
      </div>
      
      <Actions post={post} setOpen={setOpen} setOpenRepost={setOpenRepost} />
    </div>
  );
}

export default Preview;
