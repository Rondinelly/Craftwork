let machine = {}

let vehicle = {}

let robot = {}

vehicle.__proto__ = machine;

console.log(vehicle.motors);

robot.__proto__ = machine; 

console.log(robot.motors);

machine.motors = 23;

console.log(vehicle.motors);

console.log(robot.motors);
