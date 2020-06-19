const fetchUser = async (userId) => {
  const req = await fetch(
    `https://pivotinfo.herokuapp.com/api/users/${userId}`,
    {
      method: "GET",
    }
  );
  return await req.json();
};

export default fetchUser;
