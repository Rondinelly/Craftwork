const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {
  let servo = new five.Servo(9)

  servo.sweep()

  board.wait(3000, function () {
    servo.stop()
    servo.center()
  })
})
