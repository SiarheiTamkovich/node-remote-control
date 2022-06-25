import robot from 'robotjs';

export const drawCircle = (x: number, y: number, radius: number) => {
  console.log(radius)
 // robot.moveMouseSmooth(x, y);

}

export const drawRectangle = (x: number, y: number, width: number, length: number) => {
  robot.mouseToggle('down');
  robot.moveMouseSmooth(x + width, y);
  robot.moveMouseSmooth(x + width, y + length);
  robot.moveMouseSmooth(x, y + length);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
}

export const drawSquare = (x: number, y: number, width: number) => {
  robot.mouseToggle('down');
  robot.moveMouseSmooth(x + width, y);
  robot.moveMouseSmooth(x + width, y + width);
  robot.moveMouseSmooth(x, y + width);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
}