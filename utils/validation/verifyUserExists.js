export const exists = async (email) => {
  const res = await fetch("https://pivotinfo.herokuapp.com/api/users/verify", {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
  return await res.json();
};
