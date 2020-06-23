import { unlike } from "../../../utils/unlike";
import { editPost } from "../../../utils/editPost";
// import { like } from "../../../utils/like";

export const editUser = async (data, id) => {
  // NOTE : `credentials` input is an object containing user email & user password from form data
  // TODO : Standardize fetch requests, with appropriate headers, etc ...

  const res = await fetch(`http://localhost:5000/api/users/${id}`, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

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

export const like = async (user, setFavourite, post) => {
  await editPost({ likes: [...post.likes, user] }, post._id).then(
    async (response) => {
      console.log(response);
      if (response.status === "success") {
        editUser({ likes: [...user.likes, post._id] }, user._id);
        setFavourite(true);
      } else {
        return;
      }
    }
  );
};
