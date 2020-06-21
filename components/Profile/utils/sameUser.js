export const sameUser = (user, profile) => {
  return user !== null && user._id === profile._id;
};
