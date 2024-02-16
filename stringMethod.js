//concatinationa

var a="helloWorld"
var b="java        "
console.log(a+b);

//append

 b += "hy"

 console.log(b)

 //Escaping

 var c='i don\'t like it'
 console.log(c);

 //length

 console.log(a.length)

 //upper case

 console.log(a.toUpperCase())

 //lower case

 console.log(a.toLowerCase())

 //IndexOf

 console.log(a.indexOf('h'))

 //charAt

 console.log(a.charAt(5))

 //charCodeAt

 console.log(a.charCodeAt(2))

 //subString

 console.log(a.substring(3,6))
 console.log(a.substring(-3))
 console.log(a.substring(3))

 //slice

 console.log(a.slice(3,6))
 console.log(a.slice(-3))
 console.log(a.slice(3))
 console.log(a.slice(-7,-3))

 //split

 console.log(a.split(''))

 //replacing

 console.log(b.replace("java","python"))

 //trim


var len="   java      "
console.log(len.length)
 var len1=len.trim();
console.log(len1.length)

//padstart

var res='5'
var pad=res.padStart(3,'$')
console.log(pad)
var pad1=res.padEnd(3,'$')
console.log(pad1);

//long litreal

var long='havhdva akhjdvakjvdkav akdvkavdkjavdc ajhcvkjdcv'+'havhdva akhjdvakjvdkav akdvkavdkjavdc ajhcvkjdcv'+'havhdva akhjdvakjvdkav akdvkavdkjavdc ajhcvkjdcv'+'havhdva akhjdvakjvdkav akdvkavdkjavdc ajhcvkjdcv'
console.log(long)

//template litrale

console.log(`hey there this is ${b}`)



