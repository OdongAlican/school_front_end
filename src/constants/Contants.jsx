export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const loginValidator = values => {
  const errorValues = {};
  errorValues.state = 'login state';
  if (!values.email) {
    errorValues.email = 'Email required';
  }
  if (!emailRegex.test(values.email) && values.email) {
    errorValues.email = 'Invalid email';
  }
  if (!values.password) {
    errorValues.password = 'Passord Required';
  }
  if (!values.selectuser) {
    errorValues.selectuser = 'Select a User';
  }

  return errorValues;
};

export const usersList = [
  { name: 'student', value: 'students', id: 1 },
  { name: 'teacher', value: 'teachers', id: 2 },
  { name: 'principle', value: 'principles', id: 3 },
  { name: 'staff', value: 'staffs', id: 4 },
  { name: 'Super Admin', value: 'supers', id: 5 },
];
