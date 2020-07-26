import { isEmpty } from "./formatting";

export const validateMotivation = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.motivation)) {
    errors.motivation = "Required";
    valid = false;
  }
  return { errors, valid };
};
