import e from "express";

export const isAValidEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const isAValidPassword = (password: string): boolean => {
  return password.length > 6;
};

export const emailAndPasswordAreValid = (
  email: string,
  password: string
): boolean => {
  if (
    isAValidEmail(email) &&
    isAValidPassword(password) &&
    email === process.env.TEST_EMAIL &&
    password === process.env.TEST_PASSWORD
  ) {
    return true;
  }
  return false;
};
