import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Fab } from "@material-ui/core";
// Components

// Contexts
import { UserContext } from "../../../../contexts/UserContext";
// Utils
import { checkFavourited, like, unlike } from "./utils/general";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: 95,
    marginTop: 25,
  },
}));

// TODO : FIX

const Main = ({ post, setOpen }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [fav, setFav] = useState(checkFavourited(user, post));
  const author = post.author;

  return (
    <div className={classes.wrapper}>
      {fav ? (
        <Fab
          size="small"
          color="primary"
          onClick={() => unlike(user, setFav, post)}
        >
          <FavoriteIcon />
        </Fab>
      ) : (
        <Fab
          size="small"
          color="primary"
          onClick={() => (user ? like(user, setFav, post) : () => {})}
        >
          <FavoriteBorderIcon />
        </Fab>
      )}
      {user && user._id === author._id ? (
        <Fab size="small" color="primary" onClick={() => setOpen(true)}>
          <MoreHorizIcon />
        </Fab>
      ) : null}
    </div>
  );
};

export default Main;
