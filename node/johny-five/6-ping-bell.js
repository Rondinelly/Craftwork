const five = require("johnny-five");
const dgram = require("dgram");
const board = new five.Board();

board.on("ready", () => {
  let piezo = new five.Piezo(8);
  let server = dgram.createSocket("udp4");

  server.on("message", () => {
    piezo.play({
      song: 'C D F D A',
      beats: 1 / 4,
      tempo: 100
    });
  });

  server.bind(1337);
});
