const validationMessage = ({ dirty, touched, error, warning }) => {
  let errorMessage;
  let validationState;
  if (dirty && !error && !warning) {
    validationState = 'success';
  } else if (touched && (!!error || !!warning)) {
    if (error) {
      validationState = 'error';
    } else {
      validationState = 'warning';
    }
    errorMessage = error || warning;
  }
  return { validationState, errorMessage };
};

export default validationMessage;
