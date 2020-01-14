const five = require("johnny-five");
const board = new five.Board();

board.on("ready", () => {
  let piezo = new five.Piezo(9);
  let led = new five.Led(13);
  let btn = new five.Button(5);
  
  let thermo = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  let threshold = 50;
  let isOnFire = false;
  let isReset = false;

  let sirenInterval = null;

  function panic () {
    if (isOnFire)
     return;
    
    isOnFire = true;

    led.strobe(1000);
    
    piezo.tone(five.Piezo.Notes.c4, 750);
    
    sirenInterval = setInterval(() => {
      piezo.tone(five.Piezo.Notes.c4, 750)
    }, 1000);
  }

  function calm () {
    if (!isOnFire)
     return;
     
    isOnFire = false;

    led.stop().off();
    clearInterval(sirenInterval);
    piezo.noTone();
  }

  btn.on("press", () => {
    if (!isOnFire)
      return;
      
    isReset = true;
    
    calm();
  });

  thermo.on("change", () => {
    if (this.celsius > threshold) {
      if (!isReset) {
        panic();
      }
    } else {
      calm();
      isReset = false;
    }
  });
});
