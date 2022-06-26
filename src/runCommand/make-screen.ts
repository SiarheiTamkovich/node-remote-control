import robot from 'robotjs';

export const makeScreen = (x: number, y: number) => {
  const pic = robot.screen.capture(x, y, 200, 200);
  console.log(pic)
  return pic
}