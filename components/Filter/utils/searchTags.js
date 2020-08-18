export const searchTags = async (name) => {
  const res = await fetch(
    `https://pivotinfo.herokuapp.com/api/search/tags?name=${name}`
  );
  return await res.json();
};
