import { isEmpty } from "./formatting";

export const validateLocation = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.location)) {
    errors.location = "Required";
    valid = false;
  }
  return { errors, valid };
};
