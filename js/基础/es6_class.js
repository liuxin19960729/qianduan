// class A{

// }

// function B(){

// }

// console.log(typeof A)
// console.log(typeof B)
// console.log(typeof B==typeof A)

// console.log(A.prototype.constructor==A)


// function ADD(){

// }

// ADD.prototype.show=function(){
//     console.log(1,this)
//     function cb(){
//         console.log(2,this)
//     }
//     cb.apply(this,[])
// }

// let obj=new ADD();
// obj.show()

// function WEB(){

// }
// // 函数对象静态属性创建
// WEB.url="cc";
// console.dir(WEB)

class ClassWEB {
    // class静态属性
    static url = "ccc";
}

// console.dir(ClassWEB)
// console.log(new ClassWEB())

// 静态方法

// // 1.函数静态方法创建
// function M1() {

// }

// M1.cb = function () {
//     console.dir(this == M1);//this 是M1方法
// }
// M1.cb()

// class M2 {
//     constructor(name,age) {
//         this.name=name
//         this.age=age
//     }
//     static create(...args) {
//         return new this(...args);
//     }
// }

// console.dir(Object.getPrototypeOf(M2.create("lx",22))==M2.prototype)



// 访问器

// class AA{
//     constructor(){

//     }

//     set a(v){
//         this._a=v;
//     }
//     get a(){
//          return this._a
//     }
// }

// let aa=new AA()

// console.log(aa.a);

// aa.a=200;
// console.log(aa.a);

// 属性保护

// let HOST=Symbol()
// class AA{
//     [HOST]=200;
// }
// let aa=new AA()
// console.log(aa)


// WeakMap 保护属性

// const protys=new WeakMap();

// class User{
//     constructor(){
//         protys.set(this,{})
//     }

//     set name(v){
//         protys.get(this).name=v;
//     }
//     get name(){
//         return protys.get(this).name
//     }
// }

// let u1=new User();
// u1.name="lx1"

// let u2=new User();
// u2.name="lx2"
// console.log(u1.name)
// console.log(u2.name)

// 函数实现继承

// function User(name){
//     this.name=name
//     console.log("User")
// }
// User.prototype.show=function(){
//     console.log("use show")
// }
// function Admin(name){
//     User.apply(this,[name])
//     console.log("Admin")
// }

// Admin.prototype=Object.create(User.prototype);
// console.dir(Admin)
// new Admin()

// console.log(Admin.prototype==User.prototype)
// Admin.prototype.constructor=Admin;
// console.dir(Admin.prototype.constructor)
// Admin.prototype.show=function(){
//     console.log("admin show")
// }

// // console.log(Admin.prototype)

// let adm=new Admin("lx");
// adm.show()
// console.dir(adm)

// super 理解



// let parent = {
//     name: "parent",
//     show() {
//         console.log(this.name)
//     }
// }

// let child = {
//     __proto__: parent,
//     name: "child",
//     show() {
//         this.__proto__.show.apply(this)
//         console.log(this.name)
//     }
// }

// child.show()

// // 静态函数实现原理

// function User(){

// }
// console.dir(User)
// User.show=function(){
//     console.log("user static show")
// }

// function Admin(){
// }

// Object.setPrototypeOf(Admin,User);
// Admin.show()

class WArray extends Array{
    constructor(...args){
        super(...args)
    }

    push(...args){
        super.push(...args)
        console.log("wa1 push")
    }
}

// let c=new WArray(1,2,3)
// c.push(200)
// console.dir(c)
console.dir(WArray)


function WArray2(...args){
    Array.apply(this,args)
}

Object.setPrototypeOf(WArray2,Array)
WArray2.prototype=Object.create(Array.prototype)
WArray2.prototype.constructor=WArray2;
WArray2.prototype.push=function(...args){
    
}

let arr=new WArray2(1,2,3)
console.dir(arr)
arr.push(1)
// console.dir(WArray2)
// console.log(Array.prototype==WArray2.prototype.__proto__)