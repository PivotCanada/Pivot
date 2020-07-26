import { fetchPost } from "./fetchPost";

export async function fetchPosts(list, setPosts) {
  for (var id of list) {
    await fetchPost(id).then((response) => {
      if (response.status === "success") {
        let post = response.data;
        setPosts((posts) => [...posts, post]);
      }
    });
  }
}
