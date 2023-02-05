# flex弹性布局
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
## display ;开启弹性和模型 
```
display:flex;定义一个弹性盒子(块级) 默认水平排列

display:inline-flex 行级弹性盒子

```
## flex-direction
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)
[code](./flex-direction.html)
```
该属性放入盒子 设置 元素排列方向

```
## flex-wrap
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)
```
wrap 超过width 换行
wrap-reserve 反向换行 
```
## flex-flow
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)
```
flex-flow :row nowrap;
相当于
flex-direction:row;行排序
flex-wrap:nowrap;不换行
```

## 轴的概念
```
row 排列
主轴  水平
交叉轴  垂直

column 排列
主轴    垂直
交叉轴  水平
```
## 主轴的排列方式
### justfy-content  主轴
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)
[code](./justfy-content.html)
```
flex-start  left  top
flex-end    right  bottom

center 元素居中  所有元素居中
space-between  两边一人一个  中间元素平均
space-around 每一个元素左右相等
space-evenly  元素完全平分
```

## 交叉轴排列方式
### align-items
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)
```
拉伸height
align-items: stretch; (note:一定不能设置原始height)
```

## 主轴和交叉轴 能够同时设置


## 弹性元素
### flex-grow 有空间怎样分配空间
[code](./xiaomi1.html)
```
flew-grow :0;不分配 默认宽度
flex-grow:1;分配元素 分配份数
```

### flex-shrink
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)
```
只有当 元素术的宽度大于 容器的时候才会收缩

```
### 主轴的基准水平定义
```
宽高的优先级
min-width max-width 优先级最高
flex-basis 基准设置
width

```
### order 弹性元素排序
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order)

## 文本节点弹性布局
```
文本也可以使用 justfy-content
align-items 等布局来进行操作
```

## 弹性布局的定位
```
弹性布局使用

position: absolute;
    弹性定位丢失 

position:relative;
    保留空间位

和在非弹性的文档流一样

```
