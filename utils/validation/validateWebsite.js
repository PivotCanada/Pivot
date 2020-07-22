import { isEmpty } from "./formatting";

export const validateWebsite = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.website) && values.hasSite) {
    errors.website = "Required";
    valid = false;
  }

  return { errors, valid };
};
