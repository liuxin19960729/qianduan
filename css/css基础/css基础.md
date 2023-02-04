# css基础

## link 标记
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)

[code](./1.html)
```css

css 注释 :/**/


css 文件引入其他文件的css


```

## @import 引入css
[code](./2.html)
```css
https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import


css 文件引入另一个css文件
@import url(./common/common.css);
```

## 选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)
### 1.全部选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)
```css

* {

}
```
### 2.元素选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)
```css
h1 { }....
```

### 3.类型选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)
```html
.box { }
<div class="box"> <div/>
```
### 4.id 选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)
```html
#box { }
<div id="box"> <div/>
<!-- note:id应该是唯一的 -->
```

### 5. 结构选择器
#### 5.1 后代选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator)
```css
article p{}
```
#### 5.2 子元素选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator)
```css
article > p{

}
```
#### 5.3 通用兄弟选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator)
```css
h1 ~ p{
}
```
#### 5.4 相邻兄弟选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)
```css
	h1 + p{}
```
### 6.属性选择
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)

[code](./%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9.html)
```css 
a[title][id] { }

被选中
<div title id> <div/>
a[title][id] { } 存在id 和 title 属性
a[title$="xx"] 属性值结尾
a[title*="xx"] 属性值包含xx
a[title~="xx"]  <div title="xx"> or  <div title="ss xx n"> 以空格分开 包含 xx被选中 
a[title|="xx"]   <div title="aa-xx-x"> 会被选中

精准匹配 
a[href="https://example.org"] {
  color: green;
}
以xin开头结尾
div[zz^="xin"]{
  }
```
### 7.伪类选择器
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
[code](./伪类选择器.html)
[:target](./%E4%BC%AA%E7%B1%BB%E9%80%89%E6%8B%A9%E5%99%A8target.htm)

[表单样式](./%E5%9F%BA%E6%9C%AC%E7%9A%84%E8%A1%A8%E5%8D%95.html)
```css
:fullscreen 全屏下的元素

:link
:visited
:hover
:active
:foucus 获取焦点的时候
:target
:root 根选择器

:empty 表示除空白字符外没有子元素的元素。

结构相关
:first-child 
:first-of-type

:last-child
:last-of-type
:only-child 匹配没有兄弟元素
:only-of-type 唯一的元素
.....

参考: https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child
:nth-child(n)
  nth-child(1) 。。。。。。。
  n 
  odd= 2n-1
  even=2n
  2+n 从第二个开始
  -n+2 1,2 非元素

:nth-of-type(n) 元素列表寻找

:nth-last-child(n)
:nth-last-of-type(n)

:not() 排除选择器

/* 表单 */

:disabled 禁止表单填写
:enabled  
:required 必填的元素 url: https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required
:optional 不是必填的元素
:invalid 输入验证无效
:valid 验证有效的表单
.....

/* 文本相关伪类 */

::first-letter 文本第一个文字
::first-line 第一行

前面加内容
::after {
    content:''
}

后面加内容
::before{
    content:''
}


```

## CSS权重
```
权重位
 style       1000
 id          0100
class 属性    0010
元素 伪类      0001
 *            0000

权重一样  用后面写的

!important 强制使用该css属性

xxx{
  color:red !important;
}
```
### css 继承
[code](./css_%E7%BB%A7%E6%89%BF.html)
```less
有些属性存在继承关系 

有些属性不会继承
 border


* 权重是0
继承权重 NULL
0>NULL

less 书写方式
main{
    article{
        h1{
            color: red;
        }
        h2{
            color: green;
        }

        button:hover{
            color: red;
        }

    }
}
```
## 文本内容
### 字体
```
font-family :字体 可以写多个 浏览器会从头开始检查那个可以用 如果都
能用使用默认
```
#### 引入自己的字体 @font-face
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)
```css
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

```
####  font-weight 字重
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
```css
font-weight 字重
bold 加粗
normal  正常状态下
```

#### font-size 
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)
```
单位:
%
px
1em = 100%
```
#### color
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)
```css
#ffffff
rgb()
rgba()

```
#### line-height
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height)


#### font-style
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)
```css
italic  倾斜
normal  正常样式

```
#### font
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)
```css
例如
font: small-caps bold 24px/1 sans-serif;
```

#### text-transform(css 大小写转换)
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform)
```css
text-transform: uppercase; 大写
text-transform: lowercase; 小写
text-transform: capitalize;  首字母大写
text-transform: none; 无样式
```

#### text-decoration
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)
```css
text-decoration: none; 去掉文字上的线
text-decoration: underline;
text-decoration: underline dotted;
....
```

#### text-shadow 文本阴影
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)
```css
/* offset-x | offset-y | blur-radius(模糊) | color */
```

### 文本空白和溢出 (white-space)

[white-space_mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)
[text-overflow_mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)
```css

white-space: nowrap; 不换行
white-space: pre;空白符保留 忽略 换哈
            pre-wrap 换行 空白 
            pre-line 换行符


文字操出框的大小显示 ...

white-space: nowrap; 不换行
text-overflow: ellipsis;
overflow: hidden;
```

### 文本缩进和对齐
#### text-indent 缩进
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent)

#### text-align
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)
#### 垂直对齐  vertical-align
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align)

#### letter-space 字符间隔
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing)


#### word-spacing 单词间隔
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing)

#### writing-mode 排版方式
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)
