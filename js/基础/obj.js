// let arr=[1,2,3]
// let arr2=[...arr,4,5]
// console.log(arr2)

// let obj={age:100};
// let obj2={...obj,name:"lx"}
// console.log(obj2)

// function upload(cfg={}){
//     let config={
//         file:'1.hpg'
//     }
//     // 新配置覆盖旧配置
//     config={...config,...cfg};
//     console.log(config)
// }

// upload()
// upload({name:"liuxin"})
// upload({name:"crl",file:"2.jpg"})

// 解构

// let  obj={name:"刘鑫",age:22}
// let  {name:a,age:b}=obj;// let  {name:name,age:age}=obj; let  {name,age}=obj;

// console.log(a,b)

// function TT({name,age}){
//     console.log("fun",name,age)
// }

// TT(obj)

// // 只解构一个属性
// let  {name}=obj;

// console.log(name)


// function test(options={}){

//     let {name="未知",age=99}=options;
//     console.log(name,age)
// }

// test();
// test({name:'lx'});
// test({name:'lx',age:33});

// let obj={name:'lx2',cont:{
//     chinese:200,
//     math:100
// }}

// //浅拷贝 第一种方式
// let cp1=Object.assign({},obj);
// // cp1.name='crl'
// // cp1.cont.chinese=99;
// console.log(obj)
// console.log(cp1)

// // 浅拷贝第二种方式
// let cp2={}
// for(const key in obj){
//     cp2[key]=obj[key]
// }
// cp2.name='crl'
// cp2.cont.chinese=99;
// console.log(obj)
// console.log(cp2)

// //浅拷贝第三章方式

// let cp3={...obj};
// cp3.name='crl2'
// cp3.cont.chinese=990;
// console.log(obj)
// console.log(cp3)


// 深拷贝
// let obj = {
//     name: 'lx2', cont: {
//         chinese: 200,
//         math: 100
//         , arr: [0, 1, 2]
//     },
//     cb:function(){

//     }
// }



// function deepCopy(obj) {
//     if (typeof obj != "object") return obj;
//     let cpobj = Array.isArray(obj) ? [] : {};
//     for (const [ k, v ] of Object.entries(obj)) {
//         cpobj[k]=deepCopy(v);
//     }
//     return cpobj;
// }

// let cpobj=deepCopy(obj);
// cpobj.cont.arr.push(200);
// console.log(cpobj)
// console.log(JSON.stringify(cpobj))
// console.log(JSON.stringify(obj))


// 工厂函数

// function user(name, age) {
//     return {
//         name,
//         age,
//         print() {
//             console.log("user 工程函数", name, age);
//         }
//     }
// }

// user("lx1", 22).print();
// user("crl", 27).print();


// 构造函数

// function ClassA(name){
//     this.name=name;
//     this.fun=function(){
//         console.log(this.name)
//     }
//     // 不写 return this 系统默认返回this
//     // return this;
// }

// let obja=new ClassA("cc");
// obja.fun();


// 函数的创造

// 函数对象 是函数方法构造  函数对象的原型  Function.prototype

// let cb=new Function("name",`
//     this.name=name;
//     this.show=function(){
//         console.log(this.name)
//     }
// `)

// let o=new cb('ccc');
// o.show();
// console.log(Object.getPrototypeOf(o)==cb.prototype) ;//true

// let stu = {
//     data: { name: 'unknow', age: 0 },
//     get age() {
//         return this.data.age;
//     },
//     set age(v) {
//         if (typeof v != "number" || v < 10 || v >= 100) {
//             throw new Error("年龄错误")
//         }
//         this.data.age = v;
//     }
// }

// try {
//     stu.age=200;
//     console.log(stu.age)
// } catch (e) {
//     console.log(e)
// }


//代理

// "use strict"
// let obj = { name: "liuxin" };

// let proxy = new Proxy(obj, {
//     get(obj,property){
//         console.log(obj)
//         console.log(property)
//         return obj[`${property}`]
//     },
//     set(obj,property,value){
//         obj[`${property}`]=value;
//         return true;
//     }
// })
// proxy.name="crl"
// console.log(proxy.name)

// 函数代理
// function c(){
//     console.log("fun c")
// }

// let proxy=new Proxy(c,{
//     apply(fun,obj,args){
//         console.log("proxy");
//         fun.apply(obj,args)
//     }
// })

// proxy.apply(this,[])

// 数组代理
let array=[{tel:'1234567890'}];
let proxy=new Proxy(array,{
    get(arr,key){
        console.log(arr);
        console.log(key)
        return "tel:"+arr[key].tel;
    }
})

console.log(proxy[0])

