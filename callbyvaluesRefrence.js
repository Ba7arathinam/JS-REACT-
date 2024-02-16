//call by value || pass by value

var a=2
var b=1
console.log(b);

//call by refrence || pass by refrence

var arr=[1,2,3,3,4]
var arr1=arr
console.log(arr1);

//short hand assignment property

var a=1
var b=2

let per={
    a,b
}
 console.log(per);

 //CALL

 var person={
    name: "John",
    age:12,
    area:"chennai"

 }

 function per1(p,q,r){
    console.log(this.name,this.age,this.area,p,q,r)
 }
 var val1=per1.call(person,1,2,3)

 //Apply 

 var val2=per1.apply(person,[7,8,9])    

 //Bind

 var val3=per1.bind(person,4,5,6)

 val3()
