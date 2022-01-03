import { reactive } from 'vue'

const executeCommand = (position, move) => {
  const newPosition = reactive({ x: position.x, y: position.y });
  
  switch(move) {
    case 'F':
      newPosition.x--;
      break;
    case 'R':
      newPosition.y++;
      break;
    case 'L':
      newPosition.y--;
      break;
  }

  return { newPosition };
}

export default executeCommand;