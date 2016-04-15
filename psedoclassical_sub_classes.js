var Car = function(loc){
	this.loc = loc
}

Car.prototype.move  = function(){
	this.loc++
}
Car.prototype.stop = function(){
	this.speed = 0
}

var CopCar = function(loc){
	var car = new Car(loc)
	extend(this,car)
}
CopCar.prototype.speed  = function(){
	this.speed = speed
}

//prob here is we are copying super class obj into CopCar(can we some how link them instead of copying???)

var CopCar = function(loc){
	//var this = Object.create(CopCar.prototype)
	
	//this will pass the this as the context in twhich Car() should be executed
	//this will add loc propety onto our copcar
	//if we directly call Car(loc),this in Car will be global
	Car.call(this,loc)

	//return this
}
CopCar.prototype.speed  = function(){
	this.speed = speed
}

//this doesn't solve the prob completely,we only added loc prop onto copcar,but not the methods inside the Car.prototype,because
//we are not using new Car() here,where the Car prototype is linked to the car obj.
//somehow we must assaign a linkage btw prototype obj of car and copcar.

var CopCar = function(loc){
	Car.call(this,loc)
}
CopCar.prototype = Object.create(Car.prototype)
CopCar.prototype.speed  = function(){
	this.speed = speed
}

var copcar = new CopCar(8)

//there is still a prob with this approach
//if we call copcar.constructor method we will get car,
//because we have overriden the copcar.prototype to use car.prototype
var CopCar = function(loc){
	Car.call(this,loc)
}
CopCar.prototype = Object.create(Car.prototype)
CopCar.prototype.constructors = CopCar 
CopCar.prototype.speed  = function(){
	this.speed = speed
}

var copcar = new CopCar(8)

//But this approach is bad ,because we have to ovveride all the prop of prototype which differs


