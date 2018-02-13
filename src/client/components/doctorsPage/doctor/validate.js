const validateNumberPhone = number => {
  console.log('i am in the validateNumberPhone function ');
  const re = /^\+?\d{10}/;

  return re.test(number);

};
const validate = (name,phone) => {
  let isError = false;
  const isErrorNumber = validateNumberPhone(phone);
  console.log(isErrorNumber,'i am in validate');
  const errors = {};
  if (name.length < 5) {
    isError = true;
    errors.nameError = 'Name need to be at least 5 characters long';
  }
  if (!isErrorNumber) {
    isError = true;
    errors.phoneError = 'Number should be 10 digits ';
  }

  return { isError,errors };
};

export default validate;
