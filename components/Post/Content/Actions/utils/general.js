import { likeAction } from "../../../utils/likeAction";

export const checkFavourited = (user, post) => {
  let value = false;

  if (!user) {
    return value;
  }

  user.likes.forEach((id) => {
    if (id === post._id) {
      value = true;
      return;
    }
  });

  return value;
};

export const like = async (user, setFavourite, post) => {
  try {
    await likeAction({ user_id: user._id }, post._id, "posts", "like").then(
      async (response) => {
        console.log(response);
        if (response.status === "success") {
          await likeAction(
            { post_id: post._id },
            user._id,
            "users",
            "like"
          ).then((response) => {
            console.log(response);
            if (response.status === "success") {
              setFavourite(true);
            }
          });
        }
      }
    );
  } catch (error) {
    return error;
  }
};

export const unlike = async (user, setFavourite, post) => {
  try {
    await likeAction({ user_id: user._id }, post._id, "posts", "unlike").then(
      async (response) => {
        console.log(response);
        if (response.status === "success") {
          await likeAction(
            { post_id: post._id },
            user._id,
            "users",
            "unlike"
          ).then((response) => {
            console.log(response);
            if (response.status === "success") {
              setFavourite(false);
            }
          });
        }
      }
    );
  } catch (error) {
    return error;
  }
};

const remove = async (list, remove) => {
  let filtered = list.filter((i) => i !== remove);
  return filtered;
};
