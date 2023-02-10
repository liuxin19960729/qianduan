# dom
## 文档对象(window属性) 整个网页
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)
```js
document
document的原型链
HTMLDocument.prototype     -->  Document。prototype   -->Node。prototype-->EventTarget.Prototype-->Ojbect.Prototype-->null

原型链上的属性和方法都能使用

不如
document.documentElement html根元素
document.head head 元素
document.body body元素
document.links 所有的超链接元素
```


[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)
## 获取元素节点
```js
document.body body 元素

document.getElementById(id); 根据id属性获取元素

document.getElementsByClass(className) 根据class 获取一组元素

document.getElementsByTagName(tagName) 根据标签名获取一组元素
    document.getElementsByTagName("*") 获取所有标签 

document.documentElementByName() 根据name属性来获元素

document.querySelectorAll() 根据选择器获取元素节点
            返回一个新的数组对象 不会实时更新 
            div 元素选择器
            #btn id选择器
document.querySelector() 根据选择器返回一个满足条件元(note:只选择一个

)
```
### 创建元素节点
```js
document.createElement() 创建元素节点

```

## Element 元素原型链的访问
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)
```js
HTMLEvent.Property->Element.prototype->Node.Prototype-->EventTarget.Property

ele.getElementsByTagName()

ele.childNodes 获取当前元素的子节点
    节点: 文字节点(包括空白节点) 元素节点  
ele.chidren 获取当前元素的子元素

ele.firstChild() 第一个节点

ele.firstElementChild() 第一个子元素
ele.lastElementChild() 最后一子元素
ele.nextSibling() 获取后一个节点
ele.nextElementDibling  后一个元素子元素
ele.previousElementSibling 前一个子元素

ele.parentNode 元素 document
ele.parentElement 获取父元素
```
### 文本节点
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Text)
```js
所有的文本内容都是文本节点对象

ele.textContent 获取或修改文本中的内容 不会获取标签 不会忽略多余的空白和换行               如果传入标签会对标签相关进行转义
ele.innerText 获取或修改文本中的内容 不会获取标签 会考虑css样式(网页中不显示获取不到)
            如果传入标签会对标签相关进行转义

ele.innerHtml 
    获取元素中的html代码
    设置元素html代码
    note:又被xss注入的风险

```
## 属性节点
[mdn](https://developer.mozilla.org/zh-CN/docs/Glossary/Attribute)
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)
```js
document.getElementsByName()根据name属性

document.querySelectorAll("[name=""]") 通过属性选择器选择元素


note:
    class 属性需要 className 来获取

disabled 属性  bool 值 会返回 true or  false



ele.getAttribut(属性名) 读取元素的属性名
ele.setAttribut(属性名,v) 设置属性值
    note: 设置bool值的时候不行 例如 disabled
ele.removeAttribut(属性名)
    移除元素
```

### 事件
```js
onclick
ondbclick
onmoseenter 鼠标进入触发

绑定 事件
contine.addEventListener("click",function(){
    console.log(1)
})

contine.addEventListener("click",function(){
    console.log(2)
    
})

注意:addEventListener() 可以绑定多个回调函数

```
## 文档的加载
```js
window.onload=function(e){
  console.log(e)
}
window.addEventListener("onload",function(){

})

onload:所以文档加载成功 才执行

window.addEventListener("DOMContentLoaded",function(){

})
DOMContentLoaded:当前文档加载成功执行

defer 使当前文档加载完成在加载 src内容并执行
<script defer src=""> <script>



<script>  --> <script defer> -->addEventListener("DOMContenLoaded") -->load/onload
```

## 元素的修改 添加 子元素 
```js
document.createElement() 创建元素

ele.appendChild() 将一个节点添加到另一个节点里面
ele.insertAdjacentElement() 向元素任意位置添加元素
    [mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentElement)

replaceWitch 使用元素替换一个元素
remove删除当前元素
```

## a标签点击事件
```js
取消事件的默认行为 取消超链接的跳转
event.preventDefault()

// 取消默认事件
xxxx.onxxx=function(){
    return false; 
}

// 取消默认形式
<a herf="javascript:;"></a>



```
## ele.parentNode
```
父节点元素

```

## confirm 弹出框
```
取消 false
确定 true

点击按钮后 confirm() 函数会返回一个值
```

## insertJustanceHtml 插入Html字符串

## 节点的复制
### 克隆节点 cloneNode
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode)js
```js
1.cloneNode 会复制节点所有属性(包括id note:需要修改id避免重复)
2.只复制元素节点 不复制子节点 (默认)

设置既复制当前节点也复制子节点
node.cloneNode(true);
```

## 通过dom修改CSS(修改内联样式)
```js
let h2=document.querySelector("h2")
h2.style.color="red"

//css 中使用的是 - 在js中使用的是驼峰
h2.style.color="red"
h2.style.backgroundColor="black"


style 只能读取内联的样式
```

## 读取CSS样式 
### window.getComputedStyle("ele") 获取生效的样式
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)
```js
getComputedStyle(h2) // 传入元素对象
let computedH2 = getComputedStyle(h2)
console.log(computedH2.width)

getComputedStyle(h2，"::before") 读取伪元素样式
```
## 通过元素的属性读取样式 (下面的属性是只读)
### clientHeight
### clientWidth
### offsetHeight
### offsetWidth
```
获取元素可见区域的高宽(padding+content)
ele.clientHeight
ele.clientWidth

元素可见框大小 (border+padding+content)
offsetHeight
offsetWidth 
```
### scrollHeight  scrollWidth 滚动宽高
```
关东条区域总大小 [padding+子元素height]
scrollHeight
scrollWidth

```

### offsetParent 获取元素定位的父元素(离当前元素最近的定位的元素)
```
会一层一层往上找,查看是否开启定位 开启返回 否则继续找
顶层返回body 作为定位父元素
```

### offsetTop offsetLeft
```js
offsetTop  现对于定位父元素上面距离
offsetLeft  对于定位父元素左面距离
```


### scrollTop
### scrollLeft
```
获取滚动条的偏移量(滚动条滚动的具体)

```

## 操作class
### className
```js
let btn = document.querySelector("#btn")
let h2 = document.querySelector("h2")
let flag = true;
btn.onclick = function () {
    flag = !flag;
    setClass()
}
function setClass() {
    let cla = flag ? "cla1" : "cla2";
    h2.className = cla;
}
setClass();
```
### classList
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)
```
add(cla1,cla2)
remove(cla1) 移除class 
toggle(cla) 切换class
replace("foo", "bar"); 替换class
div.classList.contains("foo") 检验元素是否保护某个class
```

## 事件对象
### onmousemove 鼠标移动事件
```js
let box1 = document.querySelector(".box1")
box1.onmouseenter = function (e) {
    
}
```
### Event 是所有对象的祖先
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)
```jss
event.target:
    触发事件的对象
```
## 事件的冒泡
```
bubble
```
### 取消事件的传到
```js
event.stopPropagation() 取消事件的传导
 box2.onclick = function (e) {
        console.dir("box2")
        e.stopPropagation()// 停止冒泡
}
```

### event.currentTarget
```
event.currentTarget 当前绑定函数属性对象
event.target 那个属性被触发
```
### event.preventDefault 取消事件的默认行为

### 事件冒泡 和样式无关只和元素层级有关

### 事件委派
[code](./9.html)
```js
//在document 添加点击事件 
document.addEventListener("click", function (e) {
      console.log("document click", e.x,e.y)
  })
```
## 事件的捕获
### 事件传播阶段
```js
1.捕获阶段 document---->到目标元素开始捕获   
        默认情况下不会在捕获阶段触发事件
2.目标阶段
3.冒泡阶段 目标元素----->到document (默认是冒泡阶段触发事件)



开启捕获阶段触发
    addEventListener(type, listener, useCapture);

document.addEventListener("click", function (e) {
      console.log("document click", e.x,e.y)
      e.stopPropagation()
  },true)
```

### 事件处于那个阶段
```js
e.eventPhase,Event.CAPTURING_PHASE
document.addEventListener("click", function (e) {
    console.log("document click", e.x,e.y,e.eventPhase,Event.CAPTURING_PHASE)
    // e.stopPropagation()
},true)

document.addEventListener("click", function (e) {
    console.log("document click", e.x,e.y,e.eventPhase,Event.BUBBLING_PHASE)
   
})
```



