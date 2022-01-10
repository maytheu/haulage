module.exports = {
  param: (value) => {
    if (value === undefined || value.length === 0) return true;
  },
  verifyEmail: (value) => {
    const check =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(value).toLowerCase());
  },
  verifyPassword: (value) => {
    const check =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
    if (check.test(value)) return true;
  },
  verifyPhone: (value) => /^[0-9]/.test(value),
  phoneLength: (val) => {
    if (val.length > 10 && val.length < 12) return true;
  },
};
