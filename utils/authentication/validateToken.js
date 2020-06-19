const validateToken = async (token) => {
  const req = await fetch(
    `https://pivotinfo.herokuapp.com/api/users/validate`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const response = await req.json();

  return response;
};

export default validateToken;
