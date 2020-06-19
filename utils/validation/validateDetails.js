import { isEmpty } from "./formatting";

export const validateDetails = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.business)) {
    errors.business = "Required";
    valid = false;
  }

  if (isEmpty(values.years)) {
    errors.years = "Required";
    valid = false;
  }

  return { errors, valid };
};
