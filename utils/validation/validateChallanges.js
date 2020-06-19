import { isEmpty } from "./formatting";

export const validateChallanges = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.challenges)) {
    errors.challenges = "Required";
    valid = false;
  }

  return { errors, valid };
};
