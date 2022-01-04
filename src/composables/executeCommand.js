const executeCommand = (position, command) => {
  let lastCommand;

  switch(command) {
    case 'F':
      position.y--;
      lastCommand = 'y--';
      break;
    case 'B':
      position.y++;
      lastCommand = 'y++';
      break;
    case 'R':
      position.x++;
      lastCommand = 'x++';
      break;
    case 'L':
      position.x--;
      lastCommand = 'x--';
      break;
  }

  return { lastCommand }
}

export default executeCommand;