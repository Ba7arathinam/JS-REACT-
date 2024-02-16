// if,if else,else if

let a=23;

if(a<20){
    console.log("Not valid")
}
else if(a>=23){
    console.log("heyle it's vaild ley!")
}
else{
    console.log("valid👍")
}

// switch cases

let b= prompt("enter your value here:")

switch(b){
   case "a": case"A": case "U": case"u": case"E": case"e": case"I": case "i" :case"O": case 'o':
        document.write("IT VOVELS!................................................................🔃")
    break;
    default:
        document.write("Sorry buddy It's not vovels😔")
}


var arr=['a',2,'k',9,0,1]
//for looping
for(let i=0; i<arr.length; i++){

    console.log(arr[i])

}

//for of looping

for (let val of arr){
    console.log(val)
}

//while looping
while(arr<=arr.length){
    console.log(arr[i])
    arr++;
}
// do while looping
do{
    console.log(arr)
    arr++;
}
while(arr<=arr.length)

let table=8,i=1,limit=10

do{
    console.log(table+"X"+i+"="+(table*i))
    i++
}
while(i<=limit)

// for in looping

let obj={
    name:"kumaru",
    area:"koyambedu",
    age:'24'
}

for (let res in obj){
    console.log(res +"....."+ obj[res])
}