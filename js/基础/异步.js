
// // 宏任务 微任务
// setTimeout(()=>{
//     console.log("setTimeout");
// },0)

// new Promise((res,rej)=>{
//     res() // 将成功任务放入微队列
//     console.log("promise")
// }).then(()=>{
//     console.log("微队列")
// })

// console.log("main")


// let p1=new Promise((res,rej)=>{
//     res("成功")
// })



// let p2=p1.then(v=>{
//     console.log("p1"+v)
//     return v
// }).then(v=>{
//     console.log("p2",v)
//     return v
// }).then(v=>{
//     console.log("p3",v)
//     return v
// })

// console.log(p2)

// setTimeout(()=>{
//     console.log(p2)
// },0)


// let p=new Promise((res,rej)=>{
//     res("")
// });
// console.log(1,p)

// setTimeout(()=>{
//     console.log(2,p)
// })


// Promise.all 的使用
// let i=1;
// function A(name){
//     return new Promise((res,rej)=>{
//         rej(name+i++)
//     })
// }

// let users= ["lx","crl","xy"].map(v=>A(v))

// Promise.all(users).then(vs=>{
//     console.log(vs)
// }).catch(e=>{
//     console.log(e)
// })


//  队列

// function queue(arr) {
//     let promise = Promise.resolve()
//     arr.map(v => {
//         promise = promise.then(pv => {
//             return new Promise((res, rej) => {
//                 console.log(v);
//                 res()
//             })
//         })
//     })
// }

// queue([1,2,3,4])
// console.log("jj")

// setTimeout(()=>{
//     console.log("timeout")
// },0)


// let promise=new Promise((res,rej)=>{
//     rej()
// })

// let zz=new Promise((res,rej)=>{});
// let promise2=promise.then(v=>{
//     return zz
// }).catch(v=>{})

// console.log(promise)
// console.log(promise2==zz)

// async function Fun(){
//     console.log("function 开始")
//     let name=await 100;
//     console.log(name)
//     let name2=await new Promise((res)=>{
//         setTimeout(()=>{
//             console.log("zz")
//             res()
//         },3000)
//     })

//     console.log("gg")
// }
// let a= Fun();
// console.log(a)
// setTimeout(()=>{
//     console.log(a)
// },000)
// console.log(Fun())
// Fun().then(v=>{
//     console.log("v",v)
// })




// class 和  then 函数的结合

function User(){
    this.then=function(res,rej){
        res("刘鑫")
    }
}

async function Test(){
    let name =await new User();
    console.log(name)
}

Test()