const validateCommand = (position) => {
  let isValid = true;

  if (position.x < 0 || position.y < 0 || position.x > 19 || position.y > 19) {
    isValid = false;
  }

  return { isValid };
}

export default validateCommand;