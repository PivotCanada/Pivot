export const createTag = async (name, type = "") => {
  const body = { name: name };

  if (type) {
    body.type = type;
  }

  const res = await fetch(`https://pivotinfo.herokuapp.com/api/tags/create`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
