export async function editPost(post, id) {
  // NOTE : `credentials` input is an object containing user email & user password from form data
  // TODO : Standardize fetch requests, with appropriate headers, etc ...

  const res = await fetch(`https://pivotinfo.herokuapp.com/api/posts/${id}`, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return await res.json();
}
