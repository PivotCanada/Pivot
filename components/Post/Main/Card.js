import { useState, useEffect, useContext } from "react";
// Material UI
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import { IconButton, Fab } from "@material-ui/core";

// Components
import Modal from "../Edit/Modal";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { set } from "js-cookie";
// Utils
import { editPost } from "./utils/editPost";
import { like } from "./utils/like";
import { unlike } from "./utils/unlike";

const format = (text) => {
  let arr = text.split(" ");
  let format = "";

  if (arr.length > 45) {
    let i = 0;
    while (i < 45) {
      if (i === 44) {
        format += arr[i] + "...";
        ++i;
      } else {
        format += arr[i] + " ";
        ++i;
      }
    }
  }

  return format;
};

function Preview({ post, display }) {
  const useStyles = makeStyles((theme) => ({
    card: {
      display: display ? "flex" : "none",
      flexDirection: "column",
      borderRadius: 3,
      border: "1px solid #cccccc",
      width: "100%",
      maxWidth: 500,

      padding: 20,
      marginBottom: 25,
    },

    innerWrapper: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      padding: 0,
    },
    imageContainer: {
      display: "flex",
      width: 50,
      height: 50,
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 0,
      margin: 0,
      marginLeft: 10,
      width: "70%",
    },

    contentInnerWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "500px",
    },

    title: {
      textDecoration: "none",
      color: "black",

      fontSize: "38px",
      textAlign: "left",
      fontWeight: 700,
      margin: 0,
      padding: 0,
      width: "90%",
    },

    details: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",

      marginLeft: 0,
    },
    author: {
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
    authorWrapper: {
      padding: 0,
      display: "flex",
      height: 50,
      alignItems: "center",
      justifyContent: "center",

      width: "100%",
      margin: 0,
    },
    date: {
      color: "black",
      fontFamily: "Frank Ruhl Libre, serif",
      fontWeight: 500,
      fontSize: "14px",
      margin: 0,
    },
    description: {
      textDecoration: "none",
      color: "black",
      fontFamily: "Open Sans, sans serif",
      fontWeight: 300,
      fontSize: 14,

      width: "100%",
      margin: 0,
    },
    chip: {
      margin: 0,
      marginRight: 5,
      fontFamily: "Open Sans, sans serif",
      fontWeight: 700,
      fontSize: 10,
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
      },
    },
    chipArray: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      marginTop: 15,
    },
    button: {
      padding: 3,
      width: 100,

      textTransform: "none",
    },
    arrow: {
      display: "flex",
      alignItems: "center",
    },
    arrowIcon: {},

    buttonsWrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: 95,
      marginTop: 25,
    },
  }));

  console.log(post);

  const checkFavourited = (user, post) => {
    if (user === null) {
      return null;
    }

    let val = false;

    post.likes.forEach((like) => {
      if (like.user_id === user._id) {
        val = true;
      }
    });

    return val;
  };

  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(checkFavourited(user, post));

  const author = post.author;
  const def =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";

  const removeLike = async (user) => {
    let id = post._id;

    let arr = post.likes.filter((like) => {
      like.user_id !== user._id;
    });

    let update = {
      text: post.text,
      author: post.author,
      tags: post.tags,
      likes: arr,
    };

    let data = {
      post: post,
    };

    await editPost(update, id).then(async (response) => {
      console.log(response);
      if (response.status === "success") {
        await unlike(data, user._id).then((response) => {
          console.log(response);
          if (response.status === "success") {
            setFav(false);
          }
        });
      } else {
      }
    });
  };

  const addLike = async (user) => {
    let id = post._id;

    let user_info = {
      user_id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
    };

    let arr = post.likes;

    arr.push(user_info);

    let update = {
      text: post.text,
      author: post.author,
      tags: post.tags,
      likes: arr,
    };

    let data = {
      post: post,
    };

    await editPost(update, id).then(async (response) => {
      console.log(response);
      if (response.status === "success") {
        await like(data, user._id).then((response) => {
          console.log(response);
          if (response.status === "success") {
            setFav(true);
          }
        });
      } else {
      }
    });
  };

  if (post) {
    if (user) {
      return (
        <div className={classes.card}>
          {/* TODO : Sort out standard way for doing this */}
          <Modal open={open} setOpen={setOpen} post={post} />
          <div className={classes.innerWrapper}>
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={author.photo ? author.photo : def}
              />
            </div>
            <div className={classes.content}>
              {/* <div className={classes.authorWrapper}> */}
              <h2 className={classes.author}>
                {author.firstname} {author.lastname}
              </h2>
              {/* </div> */}
              <p className={classes.description}>{post.text}</p>
              <div className={classes.chipArray}>
                {post.tags.map((tag) => {
                  return (
                    <p key={tag.name} className={classes.chip}>
                      {tag.name}
                    </p>
                  );
                })}
              </div>
              <div className={classes.buttonsWrapper}>
                {fav ? (
                  <Fab
                    size="small"
                    color="primary"
                    onClick={() => removeLike(user)}
                  >
                    <FavoriteIcon />
                  </Fab>
                ) : (
                  <Fab
                    size="small"
                    color="primary"
                    onClick={() => addLike(user)}
                  >
                    <FavoriteBorderIcon />
                  </Fab>
                )}
                {user._id === author._id ? (
                  <Fab
                    size="small"
                    color="primary"
                    onClick={() => setOpen(true)}
                  >
                    <MoreHorizIcon />
                  </Fab>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (user === null) {
      return (
        <div className={classes.card}>
          {/* TODO : Sort out standard way for doing this */}
          <Modal open={open} setOpen={setOpen} post={post} />
          <div className={classes.innerWrapper}>
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={author.photo ? author.photo : def}
              />
            </div>
            <div className={classes.content}>
              {/* <div className={classes.authorWrapper}> */}
              <h2 className={classes.author}>
                {author.firstname} {author.lastname}
              </h2>
              {/* </div> */}
              <p className={classes.description}>{post.text}</p>
              <div className={classes.chipArray}>
                {post.tags.map((tag) => {
                  return (
                    <p key={tag.name} className={classes.chip}>
                      {tag.name}
                    </p>
                  );
                })}
              </div>
              <div className={classes.buttonsWrapper}>
                <Fab size="small" color="primary">
                  <FavoriteBorderIcon />
                </Fab>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Preview;
