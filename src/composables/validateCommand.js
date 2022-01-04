const validateCommand = (position, obstacles) => {
  let isValid = true;

  if (position.x < 0 || position.y < 0 || position.x > 20 || position.y > 20) {
    isValid = false;
    alert("Well, it seems Mars is flat after all...");
  }

  if (obstacles[position.x][position.y] === 2) {
    isValid = false;
    alert("Careful!")
  }

  return { isValid };
}

export default validateCommand;