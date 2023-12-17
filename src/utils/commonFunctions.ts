export const isEmptyOrNull = (input: string | number | null | undefined) => {
  return input === null || input === undefined || input === '';
};

export const isValidEmail = (email: string | number | null | undefined) => {
  let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return expression.test(String(email).toLowerCase());
};
