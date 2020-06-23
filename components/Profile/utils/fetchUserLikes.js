import { fetchPost } from "../../Post/utils/fetchPost";

export const fetchUserLikes = async (likes) => {
  // NOTE : `credentials` input is an object containing user email & user password from form data
  // TODO : Standardize fetch requests, with appropriate headers, etc ...

  let posts = [];

  for (const id of likes) {
    await fetchPost(id).then(async (response) => {
      if (response.status === "success") {
        posts.push(response.data);
      } else {
        return;
      }
    });
  }

  return posts;
};
