const executeCommand = (position, move) => {
  const newPosition = { x: position.x, y: position.y };
  
  switch(move) {
    case 'F':
      newPosition.y--;
      break;
    case 'R':
      newPosition.x++;
      break;
    case 'L':
      newPosition.x--;
      break;
  }

  return { newPosition };
}

export default executeCommand;