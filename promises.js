// setInterval

// setInterval(()=>{
//     console.log('hey')
// },1000)

//setTimeout

// setTimeout(()=>{
//     console.log('hellooooo')
// },3000)

// Promises

//   const prom=new Promise((resolve, reject)=>{
//     let a=1+1
//     if(a==2){
//         resolve('it even')
//     }else{
//         reject('opps it\'s odd')
//     }
//   })

//   prom.then((el)=>{console.log(el)}).catch((err)=>{console.log(err)})

  //promise method2

//   function Timeout(durations){
//     return new Promise((resolve, reject)=>{
//        setTimeout(resolve,durations)
//     })
//   }

//  Timeout(3000).then(()=>console.log('welcome')) 

 //callback hell methode 1

//  function Timeout(durations){
//     return new Promise((resolve, reject)=>{
//        setTimeout(resolve,durations)
//     })
//   }

//  Timeout(3000).then(()=>{
//     console.log('welcome1')

//     Timeout(2000).then(()=>{
//         console.log('welcome3')
//     })

//     Timeout(1000).then(()=>{
//         console.log('welcome4')
//     })
//  })
 

 //callBack Hell methode-2

//   function Timeout(durations){
//     return new Promise((resolve, reject)=>{
//        setTimeout(resolve,durations)
//     })
//   }

// setTimeout(()=>{
// console.log('number 1');

// setTimeout(()=>{
//     console.log('number 2');

//     setTimeout(()=>{
//         console.log('number 3');
//     },3000)
// },2000)
// },1000)

// how to over come callback hell

function Timeout(durations){
    return new Promise((resolve, reject)=>{
       setTimeout(resolve,durations)
    })
  }

  Timeout(5000).then(()=>{
    console.log('wlecome....')
    return Timeout(2000)
  }).then(()=>{
    console.log('welcome........')
    return Timeout(1000)
  }).then(()=>{
    console.log('welcome.................')
  })

  //promiseALL

  //first reject value

  Promise.all([Promise.reject('hey'),Promise.resolve('youuu'),Promise.reject('yesss')]).then((el)=>{
    console.log(el)
  }).catch((err)=>{
    console.log(err)
  })

  //promiseany

  // first resolve value

  Promise.any([Promise.reject('hey'),Promise.resolve('youuu'),Promise.reject('yesss')]).then((el)=>{
    console.log(el)
  }).catch((err)=>{
    console.log(err)
  })

  //promiseRace

  // first come first serve

  Promise.race([Promise.reject('am the only one'),Promise.resolve('youuu'),Promise.reject('yesss')]).then((el)=>{
    console.log(el)
  }).catch((err)=>{
    console.log(err)
  })

  //PromiseAllSetteled

  Promise.allSettled([Promise.reject('hey'),Promise.resolve('youuu'),Promise.reject('yesss')]).then((el)=>{
    console.log(el)
  }).catch((err)=>{
    console.log(err)
  })

  //promises all with two real values

  function Post(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        const post =['Get1','Get2','Get3']
        resolve(post)
       },2000)
    })
  }
  function Get(){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        const post =['post1','post2','post3']
        resolve(post)
       },1000)
    })
  }

  Promise.all([Get(),Post()]).then((el)=>{
    console.log(el)
    const[get,post]=el
    console.log(`this is get value: ${get}`)
    console.log(`this is post value: ${post}`);
  }).catch((err)=>{console.log(err)})

  //fetch

  fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>
    res.json()
  ).then((ress)=>console.log(ress)).catch((err)=>{console.log(err)})