import robot from 'robotjs';
import { commandModel } from './model.js';

export const runCommand = (command: commandModel) => {
//  console.log(command)
  const mousePos = robot.getMousePos();
  const { x, y } = mousePos;

  switch (command.name) {
    case 'mouse_up':
      robot.moveMouse( x, y - Number(command.px))
    break
    case 'mouse_down':
      robot.moveMouse( x, y + Number(command.px))
    break
    case 'mouse_left':
      robot.moveMouse( x - Number(command.px), y )
    break
    case 'mouse_right':
      robot.moveMouse( x + Number(command.px), y )
    break
    default:
  }


}