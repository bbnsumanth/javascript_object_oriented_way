//functional classes are very similar to decoratoe pattern,only diff is they do not take an obj as param and decorate them with some properties
//instead they create the object inside the function itself

var Car = fucntion(loc){
	var obj = {loc:loc}
	obj.move = function(){
		obj.loc++
	}
	return obj
}

var car1 = carLike({},1)
var car2 = carLike({},2)
car1.move()
car2.move()

//but in this approach we are creating function move on creation of every car obj,this results in many duplicate objs

var Car = fucntion(loc){
	var obj = {loc:loc}
	obj.move = moveFunc
	obj.stop = stopFunc
	return obj
}
var moveFunc = function(){
	this.loc++
}

var stopFunc = function(){
	this.speed = 0
}

var car1 = carLike({},1)
var car2 = carLike({},2)
car1.move()
car2.move()

//ther is one more prob here..we are defining the function s out side functional class and adding them as propertyies on to obj
//this is creating code duplication

function extend(toObj,fromObj){
	Object.keys(fromObj).forEach(function(key,index) {
		toObj.key = fromObj.key
	});
	return fromObj
}

var Car = function(loc){
	var obj = {loc:loc}
	extend(obj,carMethods)
	return obj
}

var carMethods = {
	move:function(){
		this.loc++
	},
	stop:function(){
		this.speed = 0
	}
}

//still there are some probs here,we are creating carMethods obj as a global variable,it would be nice if we can associate it 
//with Car func somehow,note Car function is also an object which can carry properties.

var Car = function(loc){
	var obj = {loc:loc}
	extend(obj,Car.methods)
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

//note invoking a func doesn't have any effect on its property





}

