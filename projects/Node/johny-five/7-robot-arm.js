const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  let servo = new five.Servo(9);
  let pot = new five.Sensor("A2");

  pot.on("change", () => {
    let position = five.Fn.map(this.value,
      0, 1023,
      0,  179
    );

    servo.to(position);
  });
