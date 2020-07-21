export const incrementForm = async (values, handleErrors, validation) => {
  // NOTE : Wrap handleErrors function in async, to await data fetches, such as verfiying user does not exist, etc ...
  let valid = await handleErrors(values, validation);
  if (valid) {
    return true;
  } else {
    return false;
  }
};
