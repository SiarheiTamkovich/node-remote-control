import robot from 'robotjs';
import { commandModel, mousePositionModel } from './command-model.js';

export class runCommand {

  constructor (command: commandModel) {

    console.log(command)
    const mousePos = robot.getMousePos();
    const { x, y } = mousePos;

    switch (command.name) {
      case 'mouse_up':
        robot.moveMouse( x, y - Number(command.paramX));
      break
      case 'mouse_down':
        robot.moveMouse( x, y + Number(command.paramX));
      break
      case 'mouse_left':
        robot.moveMouse( x - Number(command.paramX), y );
      break
      case 'mouse_right':
        robot.moveMouse( x + Number(command.paramX), y );
      break
      default:
    }
  }

  getMouseCoords():mousePositionModel {
    return robot.getMousePos();
  }
}
