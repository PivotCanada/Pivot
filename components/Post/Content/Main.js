import { useContext, useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components

import Primary from "./Primary";
import Chips from "./Chips";
import Actions from "./Actions/Main";
import Overview from "./Overview";
import Title from "./Title";
import MicroLink from "./MicroLink";
import Modal from "../Edit/Modal";

//social
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


// Contexts
import { ModalContext } from "../../../contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    margin: 0,

    width: "100%",
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
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className={classes.content}>
      <Modal open={openEdit} setOpen={setOpenEdit} post={post} />
      <Overview id = {post.author._id} author={post.author} date={post.created_at} />
      
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
      <FacebookShareButton url = {"https://pivot-landing.dalyanparker.vercel.app" + "/posts/" + post._id}>
          <FacebookIcon/>
      </FacebookShareButton>
      <TwitterShareButton url = {"https://pivot-landing.dalyanparker.vercel.app" + "/posts/" + post._id}>
          <TwitterIcon/>
      </TwitterShareButton>

      <Actions
        post={post}
        setOpen={setOpenEdit}
        setOpenRepost={setOpenRepost}
      />
      
     
    </div>
  );
}

export default Preview;
