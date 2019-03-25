const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function (){
  let led = new five.Led(9);
  let btn = new five.Button(5);

  btn.on("press", function (){
    led.toggle()
  })
})
