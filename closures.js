//inner functions have access to values in the outer functions even after th e outer functions finish execution
//inner functions close the variables from thier outer functions and use them during execution.even though they are called from 
//some other context.How this is possible ,,see the below example and execution tree to understand 
//where the inner function got executed

var a = 1
var arr = []
var func = function(value){
	var b = value
	arr.push(function(){
		var c = 3
		console.log(b + c)
	})
};
func(2)
arr[0]()
//arr[1]()//this will throw out a error as the main function is ran only once
func(10)
arr[0]()
arr[1]()
console.log('success')

//EXECUTION context of the bove code.

// global ec -> defines and initialize a -> define func(not executed) -> invoke func(2) [this create a new ec for func]
// 		func ec -> defines and initialize b -> pushes a function into array
// global scope -> call the 0th element of array			
// 		func ec -> 
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// global ec -> invoke func(10) [this create a new ec for func]
// global scope -> call the 0th element of array			
// 		func ec -> 
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// global scope -> call the 0th element of array			
// 		func ec -> 
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// global ec -> prints out success message

//very imp point to note:at the time of calling arr[0](),the function in which it is defined fined its execution 
//and also the inner function is called from global scope,but still the inner function is executed in func scope only
//because of that iyt always has access to variables in outer function,this are called closures => they are closing the variables from thier
//outer functions and using them during execution