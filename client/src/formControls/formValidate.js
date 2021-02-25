export default function formValidate(values) {
  let isValid = true;
  if (values.pass) {
    isValid = values.pass.length >= 8 && isValid;
  }
  if (values.amount) {
    isValid = !isNaN(values.amount) && isValid;
  }
  if (values.phone) {
    isValid = !isNaN(values.phone) && isValid;
  }
  return isValid;
}
