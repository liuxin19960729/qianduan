// 字面量创建正则表达式
// let str="7123456";
// console.log(/1/.test(str))
// let reg="7"
// console.log(eval(`/${reg}/`).test(str))


// 创建正则表达式对象

// let str="liuxin123";
// console.log(str)
// let reg=new RegExp("[0-9]","g")
// console.log(str.replace(reg,"*"))



// | 或操作符号

// let str="lisucaoxin"
// console.log(/liu|cao/.test(str))

// let url="https://www.baidu.com"

// let reg=/^http[s]{0,1}:\/\/\w+\.\w+\.\w+/;
// console.log(reg.test(url))

// let str="1232 ssdfsdf d 445 22"
// str.match(/\d+/g).forEach(v=>console.log(v))


// let str = "asbcDD dd zz gg";
// let nstr = str.replace(/dd/ig, "%")
// console.log(nstr)

// let str="liuxinaicrlcrl"
// let reg=/l/g
// console.log(reg.lastIndex)
// let v;
// while((v=reg.exec(str))){
//     console.log(v)
//     console.log(reg.lastIndex)
// }



// while((v= reg.exec(str))){
//     console.log(reg.lastIndex)
//     console.log(v)
// }

// let str=`
//     <h1>ssss
//     </h1>

//     <H1> lx</H1>
// `

// let reg=/<(h[1-6])>([\s\S]*?)<\/\1>/gi;
// console.log(str.match(reg))

// let urls=`
//     https://www.baidu.com
//     http://cc.cc.cn
// `

// let reg=/https?:\/\/((?:\w+\.)\w+\.(?:com|cn|org))/gi

// let domain=[];
// let res;
// while ((res=reg.exec(urls))) {

//     domain.push(res[1])
// }
// console.log(domain)

// let str = "@liuxin)"

// str = str.replace(/liuxin/, "$`zz$'")

// console.log(str)

// 断言匹配
// let str="刘鑫crl刘鑫yy"

// let reg =/刘鑫(?=yy)/

// str=str.replace(reg,"$&**")
// console.log(str)

let str = "tel:12345678901"

str = str.replace(/(?<=tel:\d{7})\d{4}/, (v) => {
    return "*".repeat(4)
})

console.log(str)