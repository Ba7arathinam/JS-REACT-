async function welcome(){
   return "hello world";
}

console.log(welcome())

welcome().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
//async with statements 
let reached= new Promise((resolve,reject)=>{
    let vl=false
    if(vl){
        setTimeout(()=>{
            resolve('you are reached')
        },3000)
    }else{
        reject('you are not reached')
    }
})

reached.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
//async with try/catch
async function As(){
  try {
    console.log('hi.....')
    let res=await reached;
    console.log(res)
    console.log('bye')
  } catch(err) {
   console.log(err)
  }
    
}
As()

async function getdata(){
    let getpost=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('blog post')
        },3000)
    })

    let blogcomment = new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve ('blog comment')  
        },2000);
    })

    let post =await getpost
    console.log('let post some shit')
    console.log(`post:${post}`)
    let comment = await blogcomment
    console.log('fetching comment')
    console.log(`comment:${comment}`)
    return[post,comment]
}

let gets=getdata()

console.log(gets) 

gets.then((el)=>{
    console.log(el)
}).catch((err)=>{
    console.log(err)
})