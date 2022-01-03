const executeCommand = (position, command) => {
  const newPosition = { x: position.x, y: position.y };
  
  switch(command) {
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