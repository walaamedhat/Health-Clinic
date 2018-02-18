const getAge = dob => {
  if (dob === null) {
    return 0;
  } else {
    const today = new Date();
    const dateOfBirth = new Date(dob);
    const age = today.getFullYear() - dateOfBirth.getFullYear();

    return age;
  }

};

module.exports = { getAge };
