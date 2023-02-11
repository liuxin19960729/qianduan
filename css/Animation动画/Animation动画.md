# Animation动画
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
```css
main{
     height: 200px;
     width: 200px;
     animation-name: hd;
     animation-duration: 2s;
     background: yellow;
 }
 @keyframes hd {
     from{
         background: yellow;
     }   

     to{
         background: red;
     }
 }

 or
  @keyframes hd {
     0%{
         background: yellow;
     }   

     100%{
         background: red;
     }
 }
```

## 组合书写
```css
 @keyframes hd {
     0%{
         background: yellow;
     }   

     100%{
         background: red;
     }
     0%,100%{
        组合书写
     }
 }
```

### 多个动画配合使用
```css
animation-name:name1,name2
animation-duration:1s,2s

```
### 属性重叠
```
后出现的属性覆盖前面的属性

```
## animation-fill-mode 填充模式
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode)
```css
// 在最后一帧停止
animation-fill-mode:backwards;
```
## animation-delay 延迟
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)
```

```
## 动画执行次数 animation-iteration-count
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count)
```css
animation-iteration-count: 2;
动画的无限循环
animation-iteration-count: infinite;
```

## animation-direction
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)
```
animation-direction: normal  正常播放
animation-direction: reverse 反向播放
animation-direction: alternate
```
## animation-delay 延迟动画
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)
```
延迟时间开始执行动画
```

## 在css中获取当前的计算颜色属性
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)
```
currentColor
```
## box-shadow
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
```
块元素才能够设置
```