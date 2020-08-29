export const isEmpty = (string) => {
  return string === "" ? true : false;
};

export const searchUsers = async (parameters) => {
  // console.log(parameters);

  // TODO : Error Handeling

  let count = 0;

  let url = " https://pivotinfo.herokuapp.com/api/search/users?";

  Object.keys(parameters).forEach((key) => {
    // console.log(key);

    if (key === "tags") {
      let tags = parameters[key];

      if (tags.length > 0) {
        let query = "&tags=";

        for (var tag of tags) {
          if (tags.indexOf(tag) === tags.length - 1) {
            query += tag.name;
          } else {
            query += tag.name + ",";
          }
        }

        url += query;
        console.log(url);
      }
    } else {
      if (!isEmpty(parameters[key])) {
        let query = `${key}=${parameters[key]}`;

        if (count > 0) {
          url += "&" + query;
        } else {
          url += query;
        }
      }
    }

    ++count;
  });

  const res = await fetch(url);
  return await res.json();
};
