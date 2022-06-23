import robot from 'robotjs';

export const mouseMove = () => {
  console.log(robot.getMousePos());
  robot.moveMouse(200, 200)

}