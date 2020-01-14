let machine = {
	motors: 4
}

let robot = {
	friendly: true
}

let robby = {}

robby.__proto__ = machine

console.log(robby.motors);

robby.__proto__ = robot

console.log(robby.friendly);
