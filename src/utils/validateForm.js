export default function validateForm(values, formFields) {
  const err = {};

  formFields.map((item, i) => {
    if (values[item.name].length < item.lengthMin) {
      err[item.name] = "Length of " + item.name + " is too short";
    }
    if (values[item.name].length > item.lengthMax) {
      err[item.name] = "Length of " + item.name + " is too long";
    }
  });

  if (values.Password !== values.ConfirmPassword) {
    err.ConfirmPassword = "Passwords must match";
  }

  //se hace para todos los campos
  return err;
}
