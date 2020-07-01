export const incrementForm = async (values, handleErrors, validation) => {
  // NOTE : Wrap handleErrors function in async, to await data fetches, such as verfiying user does not exist, etc ...
  let valid = await handleErrors(values, validation);
  if (valid) {
    // setStep((step) => step + 1);
    return true;
  } else {
    return false;
  }
};
