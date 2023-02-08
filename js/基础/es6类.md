## es6类
```js
class A{

}

function B(){

}
console.log(typeof A)
console.log(typeof B)
console.log(typeof B==typeof A) true
console.log(A.prototype.constructor==A) true

```

## class 下的函数不可以遍历 enumable 属性为 false

## class 默认就在严格模式下 

## 静态属性
```js
function WEB(){

}
// 函数对象静态属性创建
WEB.url="cc";
console.dir(WEB)

class ClassWEB{
    // class静态属性
    static url="ccc";
}

console.dir(ClassWEB)
```
## 静态方法
```js
// 1.函数静态方法创建
function M1() {

}

M1.cb = function () {
    console.dir(this == M1);//this 是M1方法
}
M1.cb()

class M2 {
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    static create(...args) {
        return new this(...args);
    }
}

console.dir(Object.getPrototypeOf(M2.create("lx",22))==M2.prototype)
```
## 访问器
```js

class AA{
    constructor(){
        
    }

    set a(v){
        this._a=v;
    }
    get a(){
         return this._a
    }
}

let aa=new AA()

console.log(aa.a);

aa.a=200;
console.log(aa.a);
```
## 属性的保护
```js
属性保护的方式
1.名字的约定
    _name 私有属性

2.symblo 设置
let HOST=Symbol()
class AA{
    [HOST]=200;
}
let aa=new AA()
console.log(aa)

3. WeakMap 来设置保护
const protys=new WeakMap();

class User{
    constructor(){
        protys.set(this,{})
    }

    set name(v){
        protys.get(this).name=v;
    }
    get name(){
        return protys.get(this).name
    }
}

let u1=new User();
u1.name="lx1"

let u2=new User();
u2.name="lx2"
console.log(u1.name)
console.log(u2.name)


4.私有属性保护
class{
    #a=100;
}
# 表面该变量时私有属性

5.还可以设置私有方法

    #check=>(){
        
    }
```
## 属性继承
### 函数实现继承
```js
function User(name){
    this.name=name
    console.log("User")
}
User.prototype.show=function(){
    console.log("use show")
}
function Admin(name){
    User.apply(this,[name])
    console.log("Admin")
}

Admin.prototype=Object.create(User.prototype);
Admin.prototype.show=function(){
    console.log("admin show")
}
// Admin.prototype.constructor=Admin;

// console.log(Admin.prototype)

let adm=new Admin("lx");
adm.show()
console.dir(adm)
```
## super关键字的分析
### 函数
```js
let parent = {
    name: "parent",
    show() {
        console.log(this.name)
    }
}

let child = {
    __proto__: parent,
    name: "child",
    show() {
        this.__proto__.show.apply(this)
        console.log(this.name)
    }
}

child.show()
```
note:上面的代码 多层继承会出现问题

### 解决
```
super 解决 上面的问题
```
## 静态继承原来
```js
// 静态函数实现原理

function User(){

}
User.show=function(){
    console.log("user static show")
}

function Admin(){
}

Object.setPrototypeOf(Admin,User);
Admin.show()
```
## 继承关系的判断
```
a instance A 
A.prototype 是佛在  a.__proto_ 链上
```
### Object.isPrototypeof()
```

```
## 继承内置类
```
使用原型继承 使用 js内置类 
使内置类增强

```

