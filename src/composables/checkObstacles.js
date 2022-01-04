const checkObstacles = (position, obstacles, command) => {
  let canCheck = false;
  let isClear = true;

  switch(command) {
    case 'F':
      if (position.y <= 19) canCheck = true;
      break;
    case 'B':
      if (position.y >= 0) canCheck = true;
      break;
    case 'R':
      if (position.x <= 19) canCheck = true;
      break;
    case 'L':
      if (position.x >= 0) canCheck = true;
      break;
  }

  if (canCheck) {
    if (obstacles[position.x][position.y] === 2) {
      isClear = false;
    }
  }

  return { isClear }
}

export default checkObstacles;