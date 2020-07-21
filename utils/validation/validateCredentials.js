import { exists } from "./verifyUserExists";
import { validateEmail, isEmpty, contains } from "./formatting";

export const validateCredentials = async (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.email)) {
    errors.email = "required";
    valid = false;
  }

  if (!isEmpty(values.email)) {
    if (!validateEmail(values.email)) {
      errors.email = "this email is not valid";
      valid = false;
    } else {
      await exists(values.email).then((response) => {
        if (response.data) {
          errors.email = "this email is already in use";
          valid = false;
        }
      });
    }
  }

  if (contains(values.password, " ")) {
    errors.password = "password cannot contain spaces";
    valid = false;
  }

  if (isEmpty(values.password)) {
    errors.password = "required";
    valid = false;
  }

  if (isEmpty(values.firstname)) {
    errors.firstname = "required";
    valid = false;
  }

  if (isEmpty(values.lastname)) {
    errors.lastname = "required";
    valid = false;
  }

  if (!values.consent) {
    errors.consent = "You must agree to the";
    valid = false;
  }

  // if (isEmpty(values.role)) {
  //   errors.role = "role required";
  //   valid = false;
  // }

  return { errors, valid };
};
