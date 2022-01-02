const executeCommand = (position, move) => {
  const newPosition = { x: position.x, y: position.y };
  
  switch(move) {
    case 'F':
      newPosition.x++;
      break;
    case 'R':
      newPosition.y++;
      break;
    case 'B':
      newPosition.x--;
      break;
    case 'L':
      newPosition.y--;
      break;
  }

  return { newPosition };
}

export default executeCommand;