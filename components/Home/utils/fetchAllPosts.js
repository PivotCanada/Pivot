export async function fetchAllPosts() {
  // NOTE : `credentials` input is an object containing user email & user password from form data
  // TODO : Standardize fetch requests, with appropriate headers, etc ...

  const res = await fetch(`https://pivotinfo.herokuapp.com/api/posts/all`, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}
