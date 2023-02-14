"use strict";
class A {
    constructor() {
        console.log("A");
    }
}
class B {
    constructor(a, b) {
        console.log(a, b, "B");
    }
}
function create(ctor, ...args) {
    let obj = new ctor(...args);
    return;
}
let b = create(B, "1", "2");
let a = create(A, "1", "2");
