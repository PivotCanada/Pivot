import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LoopIcon from "@material-ui/icons/Loop";
import { Fab } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TurnedInIcon from "@material-ui/icons/TurnedIn";



// Components

// Contexts
import { UserContext } from "../../../../contexts/UserContext";
// Utils
import { checkFavourited, like, unlike } from "./utils/general";
import { createPost } from "../../Create/utils/createPost";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 10,
  },
  fab: {
    color: "grey",
    boxShadow: "none",
    maringLeft: 3,
  },
}));

// TODO : FIX

const Main = ({ post, setOpen, setOpenRepost }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [fav, setFav] = useState(checkFavourited(user, post));
  const author = post.author;

  const repost = async () => {
    let new_post = {
      text: "I love a good repost",
      author: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        photo: user.photo,
      },
      tags: post.tags,
      role: "parent",
      context: post._id,
    };

    await createPost(new_post).then(async (response) => {
      console.log(response);
      if (response.status === "success") {
        // fetchPosts();
        // Router.reload();
      } else {
      }
    });
  };

  return (
    <div className={classes.wrapper}>
      {user && user._id !== author._id ? (
        <Fab
          className={classes.fab}
          size="small"
          color="secondary"
          onClick={() => setOpenRepost(true)}
        >
          <LoopIcon />
        </Fab>
      ) : null}
      {user && user._id === author._id ? (
        <Fab
          className={classes.fab}
          size="small"
          color="secondary"
          onClick={() => setOpen(true)}
        >
          <MoreHorizIcon />
        </Fab>
      ) : null}
      {fav ? (
        <Fab
          className={classes.fab}
          size="small"
          color="secondary"
          onClick={() => unlike(user, setFav, post)}
        >
          <TurnedInIcon />
        </Fab>
      ) : (
        <Fab
          className={classes.fab}
          size="small"
          color="secondary"
          onClick={() => (user ? like(user, setFav, post) : () => {})}
        >
          <BookmarkBorderIcon />
        </Fab>
      )}
      
    </div>
  );
};

export default Main;
