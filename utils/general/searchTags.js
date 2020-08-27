export const searchTags = async (name, type = "") => {
  let address = "https://pivotinfo.herokuapp.com/api/search/tags?";

  if (name) {
    address += `name=${name}`;
  }
  if (type) {
    address += `&type=${type}`;
  }

  console.log(address);

  const res = await fetch(address);
  return await res.json();
};
