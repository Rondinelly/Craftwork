let machine = {
	motors: true
}

let robot = {}

let vehicle = {}

vehicle.__proto__ = machine;

robot.__proto__ = machine;

console.log(machine.motors);

console.log(vehicle.motors);

console.log(robot.motors);

robot.motors = 4

console.log(machine.motors)

console.log(vehicle.motors)

console.log(robot.motors)
