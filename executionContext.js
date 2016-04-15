var a = 1
var func = function(){
	var b = 2
	var inner_func = function(){
		var c = 3
		console.log(b + c)
	}
	inner_func()
	inner_func()
}
func()
func()
console.log('success')


// global ec -> defines and initialize a -> define func(not executed) -> invoke func() [this create a new ec for func]
// 		func ec -> defines and initialize b -> define inner_func(not executed) ->  invoke inner_func() [this create a new ec for inner_func]
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// 		func ec -> invoke inner_func() [this create a new ec for inner_func]
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// global ec -> invoke func() [this create a new ec for func]
// 		func ec -> defines and initialize b -> define inner_func(not executed) ->  invoke inner_func() [this create a new ec for inner_func]
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// 		func ec -> invoke inner_func() [this create a new ec for inner_func]
// 			inner_func ec -> defines and initialize c -> looks for b anc c in local ec,if not found go to outer ec -> evaluates b+c and print outer
// global ec -> prints out success message