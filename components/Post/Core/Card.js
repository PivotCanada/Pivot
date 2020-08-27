import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Modal from "../Edit/Modal";
import ModalRepost from "../Repost/Core/Modal";
import Image from "../../Profile/Overview/Image";
import Author from "../Content/Author";
import Content from "../Content/Main";
import { fetchPost } from "../utils/fetchPost";
import Microlink from "@microlink/react";

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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Card = ({ post, displayLink = true }) => {
  const useStyles = makeStyles(() => ({
    card: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 3,
      minWidth: 700,
      maxWidth: 700,
      padding: 20,
      margin: 0,
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      marginBottom: 25,
      backgroundColor: "white",
      
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexWrap: "wrap",
      zIndex: 0,
      padding: 0,
      margin: 0,
    },
    repostwrapper: {
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      padding: 20,
      border: "1px solid #cccccc",
      borderRadius: 3,
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openRepost, setOpenRepost] = useState(false);
  const [repost, setRepost] = useState({});

  const isRepost = () => post.context && post.role === "parent";

  const isEmpty = (object) => Object.keys(object).length === 0;

  const fetchRepost = async () => {
    if (await isRepost()) {
      await fetchPost(post.context).then(async (response) => {
        console.log(response.data);
        if (response.status === "success") {
          setRepost(response.data);
        }
      });
    }
  };

  useEffect(() => {
    const func = async () => await fetchRepost();
    func();
  }, [post]);

  useEffect(() => {
    console.log(repost);
  }, [repost]);

  if (post) {
    if (displayLink) {
      if (!isEmpty(repost)) {
        return (
          <div className={classes.card}>
            <Modal open={open} setOpen={setOpen} post={post} />
            <div className={classes.wrapper}>
              {/* <Image image={post.author.photo} size={55} /> */}
              <Content post={post} setOpen={setOpen} />
            </div>
            <div className={classes.repostwrapper}>
              {/* <Image image={repost.author.photo} size={55} /> */}
              <Content post={repost} setOpen={setOpen} />
            </div>
          </div>
        );
      } else {
        return (
          <div className={classes.card}>
            <Modal open={open} setOpen={setOpen} post={post} />
            <div className={classes.wrapper}>
              {/* <Image image={post.author.photo} size={55} /> */}
              <Content post={post} setOpen={setOpen} />
              <FacebookShareButton url = {window.location.href} title = {"Pivot post"}>
                <FacebookIcon logoFillColor="white" fontSize = "large"/>
              </FacebookShareButton>
            <LinkedinShareButton url = {window.location.href} title = {"Pivot post"}>
              <LinkedInIcon logoFillColor = "white" fontSize = "large" />
            </LinkedinShareButton>
            <TwitterShareButton url = {window.location.href} title = {"Pivot post"}>
              <TwitterIcon/>
            </TwitterShareButton>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className={classes.card}>
          <Modal open={open} setOpen={setOpen} post={post} />
          <ModalRepost open={openRepost} setOpen={setOpenRepost} post={post} />
          <div className={classes.wrapper}>
            {/* <Image image={post.author.photo} size={55} /> */}
            <Content
              post={post}
              setOpen={setOpen}
              setOpenRepost={setOpenRepost}
            />
          </div>
        </div>
      );
    }
  }
};

export default Card;
