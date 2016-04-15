//in functioanl_classes we create a seperate obj to contain all our functions then copied onto obj we are returning from Car function
//but copying a expensive ooperation,so we can use prototype chains to get the same effect

var Car = function(loc){
	var obj = Object.create(Car.methods)
	obj.loc = loc
	return obj
}

Car.methods = {
	move:function(){
		this.loc++
	},
	stop:function(){
		this.speed = 0
	}
}

//since this approach of creating seperate obj to store methods for a function is a very common practice,
//java script gives us property on every function obj we create.
//this is called prototype => every function obj contains a property called prototype obj

var Car = function(loc){
	var obj = Object.create(Car.prototype)
	obj.loc = loc
	return obj
}
//since car.prototype obj is already create,we can just add the methods onto it,do not use obj literal notation
//because car.prototype come will some predefined properties
Car.prototype.move  = function(){
	this.loc++
}
Car.prototype.stop = function(){
	this.speed = 0
}

var car1 = Car(5)

//we generally says prototype of a is b => failed lookups on a are serached in b
//here we are are saying there is an obj called Car.prototype !=> failed lookups on Car functionObject will search 
//Car.prototype,instead they search some thing called as a function.prototype obj
//imp point here is not to confuse Car.prototype as an obj which Car func obj inherits from.
//Car.prototype is a prototype for cars obj we created from Car func .

//Car.prototype obj has a property which links it to the functionObject it came from(Car in this case)
//using this we can always get the constructor function for any object
console.log(Car.prototype.constructor) 
console.log(car1.constructor)



