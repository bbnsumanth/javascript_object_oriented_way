//prototype sharing enables us to inherit certaiin properties from another objects 

var obj1  = {a:1}
console.log(obj1.a)
//method to create an empty object by linkin ganother obj to it
var obj2 = Object.create(obj1)
console.log(obj2.a)
obj2.b = 2
console.log(obj2.b)
console.log(obj2.c)

function extend(toObj,fromObj){
	Object.keys(fromObj).forEach(function(key,index) {
		toObj.key = fromObj.key
	});
	return fromObj
}
//here we are simply copying elements from one obj to another
var obj3 = {}
extend(obj3,obj1)
console.log(obj3.a)
obj3.b = 2
console.log(obj3.b)
console.log(obj3.c)

//both these approaches differ
//in chaining approach,we are  saying that obj2 should use obj1 if it couldn't find a propety inside
//in copying approach we just simply copied contents on obj1 to obj2,this is one time,what ever changes on obj1 later won't have any effect on obj2.

obj1.c = 2
console.log(obj1.c)
console.log(obj2.c)
console.log(obj3.c)
