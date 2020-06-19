import { isEmpty, validateEmail } from "../../../utils/validation/formatting";
import { exists } from "../../../utils/validation/verifyUserExists";

export const validateLogin = async (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.email)) {
    errors.email = "Required";
    valid = false;
  }

  if (!isEmpty(values.email)) {
    if (!validateEmail(values.email)) {
      errors.email = "This Email is Not Valid";
      valid = false;
    } else {
      await exists(values.email).then((response) => {
        if (!response.data) {
          errors.email = "User With This Email Does Not Exist";
          valid = false;
        }
      });
    }
  }

  if (isEmpty(values.password)) {
    errors.password = "Required";
    valid = false;
  }

  return { errors, valid };
};
