import robot from 'robotjs';

export const drawCircle = (x: number, y: number, radius: number) => {
  robot.moveMouse(x + radius, y);
  robot.mouseToggle('down');

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    robot.moveMouse(x + (radius * Math.cos(i)), y + (radius * Math.sin(i)));
  }
  robot.mouseToggle('up');
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