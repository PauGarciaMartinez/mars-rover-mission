const rectifyCommand = (position, lastCommand) => {
  switch(lastCommand) {
    case 'y--':
      position.y++;
      break;
    case 'x++':
      position.x--;
      break;
    case 'x--':
      position.x++;
      break;
  }
}

export default rectifyCommand;