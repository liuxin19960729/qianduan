

class A {
    constructor() {
        console.log("A")
    }
}

class B {
    constructor(a: string, b: string) {
        console.log(a, b, "B")
    }
    show() {

    }
}


function create<T>(ctor: new (...args: any[]) => T, ...args: any[]): T {
    let obj = new ctor(...args);
    return obj
}
let b = create(B, "1", "2");

let a = create(A, "1", "2");

type Arrayish = { [n: number]: unknown };
type AA = keyof Arrayish;

type StrP = keyof string
let c: StrP = "includes"

type Child = { name: string, age: number }
type ZZ<T,U>  =T extends U  ? true : false;

let zzz:ZZ<string,number|string>=true;

