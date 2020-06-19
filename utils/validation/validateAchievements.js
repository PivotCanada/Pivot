import { isEmpty } from "./formatting";

export const validateAchievements = (values) => {
  let errors = {};
  let valid = true;

  if (isEmpty(values.achievements)) {
    errors.achievements = "Required";
    valid = false;
  }

  return { errors, valid };
};
