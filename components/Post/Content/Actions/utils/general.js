import { unlike } from "../../../utils/unlike";
import { editPost } from "../../../utils/editPost";
import { like } from "../../../utils/like";

export const checkFavourited = (user, post) => {
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

export const removeLike = async (user, setFav, post) => {
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

export const addLike = async (user, setFav, post) => {
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
