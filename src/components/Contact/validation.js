const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validation({ name, email, message }) {
  const errors = {};

  if (name === "") {
    errors.name = "write your name";
  } else {
    errors.name = true;
  }
  if (!regexEmail.test(email) || email === "") {
    errors.email = "It must be an email";
  } else {
    errors.email = true;
  }
  if (message === "") {
    errors.message = "write me a message";
  } else {
    errors.message = true;
  }
  return errors;
}
