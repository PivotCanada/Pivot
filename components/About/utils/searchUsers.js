export const isEmpty = (string) => {
  return string === "" ? true : false;
};

export const searchUsers = async (parameters) => {
  console.log(parameters);

  // TODO : Error Handeling

  let count = 0;
  let url = "https://pivotinfo.herokuapp.com/api/search/users?";

  Object.keys(parameters).forEach((key) => {
    console.log(key);

    if (key === "skills") {
      let skills = parameters[key];

      if (skills.length > 0) {
        let query = "&skills=";

        for (var skill of skills) {
          if (skills.indexOf(skill) === skills.length - 1) {
            query += skill._id;
          } else {
            query += skill._id + ",";
          }
        }

        url += query;
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
