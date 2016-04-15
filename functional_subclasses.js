//superclass
function extend(toObj,fromObj){
	Object.keys(fromObj).forEach(function(key,index) {
		toObj.key = fromObj.key
	});
	return fromObj
}

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

//copcar
//here we are using car as our basic obj and building other features on top of this
var CopCar = function(loc){
	var car = Car(loc)
	var copcar = extend(obj,CopCar.methods)
	return copcar

}

CopCar.methods = {
	chase:function(speed){
		this.speed = speed
	}
}

//there are some problems with this,we can not override the properties whicha re defined n super class