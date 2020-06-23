export async function editPost(update, id) {
  // NOTE : `credentials` input is an object containing user email & user password from form data
  // TODO : Standardize fetch requests, with appropriate headers, etc ...

  const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  });
  return await res.json();
}
