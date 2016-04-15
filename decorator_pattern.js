var carLike = fucntion(obj,loc){
	obj.loc = loc
	obj.move = function(){
		obj.loc++
	}
	return obj
}

var car1 = carLike({},1)
var car2 = carLike({},2)
car1.move()
car2.move()

//this way of creating objects using decorator pattern has prob,move func is obj is created for every car we make using carLike
//we can avoid it using a single function to do that 

var carLike = fucntion(obj,loc){
	obj.loc = loc
	obj.move = move
	return obj
}

var move = function(){
	//here this will get the value of obj on which method is invoked
	this.loc++
}