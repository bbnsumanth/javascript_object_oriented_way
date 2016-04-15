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

var Car = function(loc){
	this.loc = loc
	return obj
}
Car.prototype.move  = function(){this.loc++}
Car.prototype.stop = function(){this.speed = 0}

var CopCar = function(loc){
	//create an obj linnking to prototype
	var obj = Object.create(CopCar.prototype)
	//create an car obj
	var car = Car.call(obj,loc)
	//copy car to the obj we created using prototype linkage
	var copcar = extend(obj,car)
	return copcar 
}

CopCar.prototype = Object.create(Car.prototype)
CopCar.prototype.constructors = CopCar 
CopCar.prototype.chase = function(speed){this.speed = speed}

//but this is bad because we removed some code from Car class,this should not happen.
//so good solution to this is using psedoclassical pattern,where we do not have that code we removed in Car class.
//that code is added only when the function is invoked with new keyword.