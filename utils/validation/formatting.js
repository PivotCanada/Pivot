export const isEmpty = (string) => {
  return string === "" ? true : false;
};

export const contains = (string, char) => {
  return string.includes(char) ? true : false;
};

export const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
};

export const formatEmail = (email) => {
  return email.trim().toLowerCase();
};
