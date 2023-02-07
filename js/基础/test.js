function Sum(){
    let s=100;
    return function Sum1(){
        let s1=200;
        console.log(s)
    }
}

Sum()();