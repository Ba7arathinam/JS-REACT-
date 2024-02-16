let appu=[1,2,8,9,8,0]
 
let bava=[3,7,8,9,2,4,6,88,-98,-8]

//remove the duplicates in single and multi array

let va=[...appu,...bava]
let suri= [...new Set(bava.concat(appu))]
let res1= [...new Set(appu)]
console.log(res1)

// find duplicate in two array

// function dup(arr1,arr2){
//     return arr1.filter(el=>{arr2.includes(el)})
// }
// console.log(dup([12,3,4,5,6],[9,7,6,54,4,]));
//arrange array in order

let res=bava.sort((a,b)=>a-b)
console.log(res);

// count repeated elements or values in array
 
let count={}
appu.forEach(function(i){
    count[i]=(count[i]||0)+1
    return
})
console.log(count)

//remove even number repeated element from array

for(let key in count){
    if(count[key]%2===0){
        delete count[key]
    }else{
        console.log(key, count[key])
    }
}

//Turn keys into uppercase letters

var obj={jack:"three",rohit:"two",kumar:"one"}

let upper = {}

for(let keys in obj){
    upper[keys.toUpperCase()]=obj[keys]
}
console.log(upper)

//find missing number 
 let arr=[1,2,4,5]

 let a=arr.length+1

 let arraylength = a*(a+1)/2

 let totalValue = arr.reduce((acc,val)=>{
    return acc+val
 },0)

 let total=arraylength-totalValue

 console.log(total)

 //transfer single array into nested arrays

 const arrayToMatrix = (array, columns) => Array(Math.ceil(array.length / columns)).fill('').reduce((acc, cur, index) => {
    return [...acc, [...array].splice(index * columns, columns)]
  }, [])
 
  const ind = [
    'item 1', 'item 2',
    'item 1', 'item 2',
    'item 1', 
  ]
  let val=[]
  const result = arrayToMatrix(ind, 2)

for(i=0;i<=ind.length;i++){
 for(j=i; j<=ind ; j++){
    val.push(splice(ind[j],i++))
 }
}
 
  console.log(result) 
  console.log(val)

//remove vowels in string

let vowels=['a','e','i','o','u','A','E','I','O','U']

var st="Balarathinam"
var r=''

for(let i=0; i<st.length; i++) {
  
if(!vowels.includes(st[i])){
     r += st[i]
}
}

console.log(r)

//remove repeated values

let rep='balarathinam'
let ot=''
 for(let i=0; i<rep.length; i++){
    if(rep.indexOf(rep[i])===i){
        ot += rep[i]

    }
 }

 console.log(ot)

 //palindrome 

 let pal='121'

 let pal1=pal.split("").reverse().join('')

 if(pal===pal1){
    console.log(`${pal} is palindrome`)
 }else{
    console.log(`${pal} is Not a palindrome`)
 }

// fibonacci series

let fib=20;
let n=0, n1=1,nextval
let fib1=[]
for(let i=0; n<=fib; i++){
    fib1.push(n)
    // console.log(n)
    nextval=n+n1
    n=n1;
    n1=nextval
}
 console.log(fib1)

 //find prime number  or not

 let prime=7

 if(prime==1){
    console.log(`${prime} is prime number nor compateative number`);
 }  
 else if(prime%2==0 || prime%3==0 || prime%5===0 || prime%7===0 || prime%11===0  || prime%13 ===0 || prime%17===0 || prime%19===0){
    console.log(`${prime} is not a prime number`)
 } else{
    console.log(`${prime} is  a prime number`)
 }

 // covert fatteing or 2D array to single Dimentional Array

 let ar=[[1,2,3,4],[8,9,4,5]]

 let ar1=ar.flat()

 console.log(ar1)

 // find a prime number in set of values


