# ts
## 编译监听
```ts
tsc xxx.ts -w
tsc xxx.ts --watch 
```
## ts 设置类型
```ts
let a:string ="xxx"
number
boolean
数组:
    number[]   string[]

组合类型
let data:number|string
let array:(string|number)[]=[]

any 任意类型 (相当于js 使用变量不会在编译的时候检查)
```
### tsconfig 设置 noImplictAny 不能使用隐式的any

### unknow 和 any
```ts
unknow 不知道什么类型 我有类型
any 任何类型

let c:unknow=200;
let a =c as number; // 类型断言
```
### void 
```ts
值: null undefined
let hd:void=undefined
一般用于函数返回值类型
```
### never
```
函数什么返回值也没有

函数抛出异常
```

### null  undefined
```ts
let hd:null=null;
let hd:undefined=undefined
void 类型  值 也是 null 和  undefined 

默认情况下  可以将null 和  undefined 作为值给其他类型

可以通过配置 tsconfig配置禁用
```

### 函数类型
```
可以通过函数类型限制变量
```

### 可选参数 调用不传入值 该变量值为undefined


### 函数参数默认值

## 函数的返回类型
### 1.ts自动推断
### 指定函数返回值
```ts
void 函数返回值
```
## type 对函数声明
```ts
对象和函数进行声明
type XXType={}
```
## 函数类型定义
```ts
细节定义 返回 number类型
let cb:()=>number=func;
note:函数实现必须返回number
```
## 元组类型定义
```ts
let tuple:[string,number,boolean]=["ss",2,true]
```
## 枚举
```ts
enum xxx{

}
```
## 断言
```ts
let a: 'a' | 'b' ="a";

xxx as string  断定xxx是string类型

```
## const 断言

```ts
值类型
let g: 'zz' ='zz';
const g:'zz' ;常量 值类型

xxx as const 转换为值类型


[true,1] as const ; 转换为 只读元组

as const 
    变量 redonly 类型
    值类型变量  redonly 值

```

## xxxx | undefined  xxxx | null 
## ! 作为非空断言

## 对象属性
```
方法在原型
属性在对象里面
```

### 类
```ts
class A{
    constructor(public name:string){

    }
} 

constructor(public name:string) 相当于 属性赋值
```
## 接口
```ts
interface A{
    name:string
    age:number
    info?()
    // 允许实现以这个接口约束穿件这个对象的是够 添加新的属性
    [key:string]:any
} 
```
## 接口的继承 和 实现多接口
```
接口是定义规范
```
## interface 对函数的约定
```ts
interface Fun{
    ()=>boolean;
}
```
## 接口声明的合并
```ts
1.同名接口不会覆盖而是合并
  interface A{
    a:string
  }
   interface A{
    b:string
  }

  最后 A 接口 会把a 和 b属性进行合并

```
## interface 和 type 
```
绝大多少和interface 和 type 使用类型约束是一样的
类也可以实现Type类型
```
### interface 和 type 的区别
```ts
type:
    声明别名
    type isb=boolean
    type isb= 'a' | 'b'

```
### type的合并
```ts
type 不允许定义同名 不能合并(区别于interface)

// type的合并
type C =A & B
type C =A | B C 满足任何一个类型
type C =A & Interface
```

## 泛型
## ts 装饰器

