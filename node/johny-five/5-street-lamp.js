const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {
  let led = new five.Led(9);
  let pr = new five.Sensor('A0');

  pr.on("change", function () {
    if (this.value > 600) {
      led.on()
    } else {
      led.off()
    }
  })
})
