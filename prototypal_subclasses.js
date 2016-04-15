//car
var Car = function(loc){
	var obj = Object.create(Car.prototype)
	obj.loc = loc
	return obj
}
Car.prototype.move  = function(){this.loc++}
Car.prototype.stop = function(){this.speed = 0}

var car1 = new Car(7)

//copcar
var CopCar = function(loc){
	//create an obj linnking to prototype
	var obj = Object.create(CopCar.prototype)
	//create an car obj
	var car = Car(loc)
	//copy car to the obj we created using prototype linkage
	var copcar = extend(obj,car)
	return copcar 
}

CopCar.prototype.chase = function(speed){this.speed = speed}

//prob here is we are copying super class obj into CopCar(can we some how link them instead of copying???)
