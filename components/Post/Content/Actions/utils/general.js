// import { unlike } from "../../../utils/unlike";
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

export const like = async (user, setFavourite, post) => {
  await editPost({ likes: [...post.likes, user._id] }, post._id).then(
    async (response) => {
      console.log(response);
      if (response.status === "success") {
        await editUser({ likes: [...user.likes, post._id] }, user._id).then(
          (response) => {
            console.log(response);
            if (response.status === "success") {
              setFavourite(true);
            }
          }
        );
      } else {
        return;
      }
    }
  );
};

const remove = async (list, remove) => {
  let filtered = list.filter((i) => i !== remove);
  return filtered;
};

export const unlike = async (user, setFavourite, post) => {
  let filtered = await remove(post.likes, user._id);
  await editPost({ likes: filtered }, post._id).then(async (response) => {
    console.log(response);
    if (response.status === "success") {
      let filtered = await remove(user.likes, post._id);
      await editUser({ likes: filtered }, user._id).then((response) => {
        console.log(response);
        if (response.status === "success") {
          setFavourite(false);
        }
      });
    } else {
      return;
    }
  });
};
