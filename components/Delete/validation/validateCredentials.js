import {
  validateEmail,
  isEmpty,
  contains,
} from "../../../utils/validation/formatting";

export const validateCredentials = async (values) => {
  let errors = {};
  let valid = true;

  //   if (isEmpty(values.email)) {
  //     errors.email = "Required";
  //     valid = false;
  //   }

  //   if (!isEmpty(values.email)) {
  //     if (!validateEmail(values.email)) {
  //       errors.email = "This Email is Not Valid";
  //       valid = false;
  //     } else {
  //       await exists(values.email).then((response) => {
  //         if (response.data) {
  //           errors.email = "This Email is Already in Use";
  //           valid = false;
  //         }
  //       });
  //     }
  //   }

  //   if (contains(values.password, " ")) {
  //     errors.password = "Password Cannot Contain Spaces";
  //     valid = false;
  //   }

  //   if (isEmpty(values.password)) {
  //     errors.password = "Required";
  //     valid = false;
  //   }

  if (isEmpty(values.firstname)) {
    errors.firstname = "Required";
    valid = false;
  }

  if (isEmpty(values.lastname)) {
    errors.lastname = "Required";
    valid = false;
  }

  // if (isEmpty(values.role)) {
  //   errors.role = "role required";
  //   valid = false;
  // }

  return { errors, valid };
};
