const validateCommand = (position, obstacles) => {
  let isValid = true;

  if (position.x < 0 || position.y < 0 || position.x > 19 || position.y > 19) {
    isValid = false;
    alert("Alert: well, it seems Mars is flat after all...");
  }

  /* if (obstacles[position.x][position.y] === 2) {
    isValid = false;
    alert("Alert: obstacle found")
  } */

  return { isValid };
}

export default validateCommand;