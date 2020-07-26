export const createTag = async (name) => {
  const res = await fetch(`https://pivotinfo.herokuapp.com/api/tags/create`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  return await res.json();
};
