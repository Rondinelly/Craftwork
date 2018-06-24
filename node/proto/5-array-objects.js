let machine = {
	parts: [],
	capabilities: {}
}

let robot = {}

let vehicle = {}

robot.__proto__ = machine

vehicle.__proto__ = machine 

console.log(robot.parts);
console.log(robot.capabilities);

console.log(vehicle.parts);
console.log(vehicle.capabilities);

robot.parts.push("core");

console.log(robot.parts);
console.log(vehicle.parts);

vehicle.capabilities.fly = true;

console.log(robot.capabilities);
console.log(vehicle.capabilities);
