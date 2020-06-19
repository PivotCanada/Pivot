import { isEmpty } from "./formatting";

export const validateGoals = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.goals)) {
    errors.goals = "Required";
    valid = false;
  }

  return { errors, valid };
};
