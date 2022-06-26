import robot from 'robotjs';
import { commandModel, mousePositionModel } from './command-model.js';
import { drawCircle, drawRectangle, drawSquare } from './draw.js';
import { makeScreen } from './make-screen.js';

export class runCommand {

  constructor (command: commandModel) {

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
      case 'draw_circle':
        drawCircle(x, y, Number(command.paramX));
      break
      case 'draw_square':
        drawSquare(x, y, Number(command.paramX));
      break
      case 'draw_rectangle':
        drawRectangle(x, y, Number(command.paramX), Number(command.paramY));
      break
      default:
    }
  }

  getMouseCoords():mousePositionModel {
    return robot.getMousePos();
  }

  getScreen(x: number, y: number) {
    return makeScreen(x, y)
  }
}
