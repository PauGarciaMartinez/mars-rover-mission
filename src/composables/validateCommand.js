const validateCommand = (position) => {
  let isValid = true;

  if (position.x < 0 || position.y < 0) {
    isValid = false;
    alert("Well, it seems Mars is flat after all...");
  }

  return { isValid };
}

export default validateCommand;