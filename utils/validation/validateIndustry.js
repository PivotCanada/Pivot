import { isEmpty } from "./formatting";

export const validateIndustry = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.industry)) {
    errors.industry = "Required";
    valid = false;
  }

  return { errors, valid };
};
