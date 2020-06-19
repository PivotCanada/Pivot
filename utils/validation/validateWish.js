import { isEmpty } from "./formatting";

export const validateWish = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.wish)) {
    errors.wish = "Required";
    valid = false;
  }

  return { errors, valid };
};
