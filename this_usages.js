//a function can be invoked in 3 different ways,reffering this in a function depends on how the function is invoked

									//function invocation//
var funcc = function(){
	var that = this
	console.log(this)
	var inner_func = function(){
		console.log(this)
	}
	//even though inner_func is defined and invoked inside the funcc and it has access to all its param,
	//it doesn't have access to this of outerfunction
	inner_func()
    //now we can refer to this of outter function from inner function by using that.
	var another_inner_function = function(){
		console.log(that)
	}
	another_inner_function();
	return 2;
} 

console.log(funcc)


funcc()

									//method invocation//
//we can define a property on any object and assaign a function to it
//create an obj literal
var obj = {}
//assaign funcc to a property func on obj 
obj.func = funcc
//invoke the func of the obj
obj.func()

//in this method invocation ,this in the funcc refers to the object on which the method is invoked
//note inner function's this will still refer to global,because inner functions can not see the this of outer fuctions
//work arround for this is to assaign the value of this to some other variable say that and use 'that' in the inner function.

									// consttructor invocation //
//we can create new objects by invoking a function using new keyword,in this case func is executed but the return will be a new obj.
//note even though we return some thing in the function,invoking a function using new will always return a new obj

var newObj = new funcc();
console.log(newObj)

//this in the function refers to the newly created obj