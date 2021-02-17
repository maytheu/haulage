export default function formValidate(values) {
  let isValid = true;
  if (values.pass) {
    isValid = values.pass.length >= 8 && isValid;
  }
  return isValid;
}
