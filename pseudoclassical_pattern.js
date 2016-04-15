//in the protypal classes,there is some code repeated of every prototypal class we write
//eg:creating an obj and assaiging the Car.prototype to it,returning the object we created at begining
//these can be avoided if we are using a new key word with our Cr function when creating a car object 

var Car = function(loc){
	this.loc = loc
}

Car.prototype.move  = function(){
	this.loc++
}
Car.prototype.stop = function(){
	this.speed = 0
}

var car1 = new Car(6)

//whats happening here is js is adding few lines of code for us

var Car = function(loc){
	var this = Object.create(Car.prototype)
	this.loc = loc
	return this
}

Car.prototype.move  = function(){
	this.loc++
}
Car.prototype.stop = function(){
	this.speed = 0
}
var car1 = new Car(6)

//so psudoclassical pattern is  ajust a syntax update from prototypal pattern
//in this pattern either in protypal or functional classes or psedoclassical pattern,we are seperating common parts to 
//prototype/seperate global function/property on function obj and obj specific parts to the function body.


//both the codes are same
//so when invoking a function with new key word,if that function is returning some thing it will be overridden by the object it constructed