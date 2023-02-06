# grid栅格系统
## 栅格系统不好的问题
```
1.兼容性问题(老浏览器不支持)

```
## display 设置栅格容器
[code](./1.html)
```css
display:grid; 块的栅格模型
dispaly:inline-grid ；行内的栅格模型
```
 
## repeat(x,x) 重复函数
```
repeat(2,50%) // 两个%50

repeat(2,4,5) 2个 4,5 (4,5,4,5) 

repeat(auto-fill,50%)  ; // 自动填充 auto-fill
[code](./2.html)
```
## grid-template-rows grid-template-coloums
```css
grid-template-coloums:1fr 1fr 1fr; 3列每列一份
```

## minmax(x,y)
```
最小和最大
```

## row-grap 行间距
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/row-gap)
```

```
## colum-grap 列间距
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap)
## gap
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)
```
gap:10px 20px； 行间距  列间距 

```
### 练习
[code](./3.html)


## 元素放入栅格 (第一种方式)
[code](./4.html)
[grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
[grid-column-strt](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
[grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
[grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
```css
grid-row-start 开始行第几条
grid-column-strt 开始列第几列
grid-column-end 结束第几行
grid-column-end 结束第几列

grid-column-end :span 2 ； 偏移几个格子
简写方式 (推荐方式)
grid-row:3/4;
grid-column=:3/4;
grid-row: 1 / span 2;

```

## gird-area
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-area)
```css
1.
grid-area:start_row/start_column/end_row/end_column

grid-area: header; 设置命名的区域

```

##  grid-template-areas
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)
```css
. 表示占位符号
grid-template-areas：“.”
```

## grid-auto-flow  栅格的流动方向
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-flow)
```
row 行 
colum 

row dense ；后面的元素填满前面的格子

```

### justify-content (和弹性的方式一样)
### align-content (和弹性的方式一样)
```
容器的空间大于弹性盒子空间 可以使用排列方式
```
## 整体控制元素
```
元素不给高度默认撑满
```

### justify-items 和弹性盒子一样
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items)
### align-items 和弹性盒子一样
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)


## 独立控制一个元素
### justify-self
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-self)
### align-self
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)


### place-content
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-content)
```
水平 和 垂直 对容器的定义 影响元素排雷 
```

### place-items
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-items)
```
    水平垂直对元素的定义
```
###  place-self

```
place-self
对自己元素独立控制 
```