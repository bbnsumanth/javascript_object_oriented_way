//code in different files share same global scope
//so they can access the variables in other files
//a is global 
var a = 2
console.log(a)
//defining a function => defining a new lexicl scope

var func = function(){
	var b = 3
	//functions can access vars in global scope
	console.log(a)
	console.log(b)
    //functions can change vars from global scope,they
    a = 4
    console.log(a)
    //even though we did't define var for c,
	//this works but c is now defined in globl scope,it can be accessed from outside the function,if the function got invooked
	c = 5
	console.log(c)
}
func()

//globla vars modified in a function will reflect changes out side of the functions aswell
console.log(a)
//console.log("c is not defined ,bcoz func is not executed,it will throw out an error : " + c)
//c is avaialble outside the function ,bcoz it is not assaigned using var in func 
console.log(c)


//more on scopes
//functions 

var func2  =function(){
	//functions can ovveride vars from global => during execution of a func,
	//ec will look for variables in the function scope,if it didn't find them only then it goes to outer scope
	//here it will find a defined in function scope,so when we are trying to print a even before it got initialized.so it is 
	//set to undefined
    console.log(a)
    var a = 6
    console.log(a)
}()
//fun2 won't have any effect on a in global scope
console.log(a)
