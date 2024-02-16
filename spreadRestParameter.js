//spread parameter

//array
let a1=[1,2,3,4,5,]

let a2=[6,7,8,0,9,9]

console.log(...a1,...a2)

//object

let a3={
    nam:'bala',
    designation:'software developer'
}
let a4={
    age:23,
    salary:7+"lpa"
}
let a5={...a3,...a4}
console.log(a5);

//rest parameter

function rest(...num){
       return num.reduce((acc,val)=>acc+val,0)
}

let a6=rest(1,3,4,5,6,6)

console.log(a6)

//method of create object

//litral

let obj={
    nam:'aj',
    val:'boo'
}

console.log(obj)

//constructor

let obj1=new Object()
 obj1.name='bala'
 obj1.designation='software developer'

 console.log(obj1)

 //class

 class Person{
    constructor(nam,age,salary){
        this.nam=nam;
        this.age=age;
        this.salary=salary;
    }
 }

 let person2=new Person("bala",23,' Software Developer')

 console.log(person2)
