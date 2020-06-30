// Utils
import fetchUser from "../../../utils/general/fetchUser";

const fetchUsers = async (user_ids, setFunction) => {
  let list = [];

  for (var id of user_ids) {
    await fetchUser(id).then((response) => {
      if (response.status === "success") {
        list.push(response.data);
      }
    });
  }
  setFunction(list);
};

export default fetchUsers;
