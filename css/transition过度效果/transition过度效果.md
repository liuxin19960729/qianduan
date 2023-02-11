# transition过度效果
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
[code](./1.html)

## transition 可以继承
```cs
transition:2s;

时间单位
s
ms
```

## transition-property 设置那些属性参与过度
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property)
```css
transition-property: border-radius;
transition-property: none;
transition-property: all;
```

## transiton-duraition 设置过度时间
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)
```css
支持不同属性不同的过度时间
/* <time> 值 */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;
```
## 动画结束事件 JS代码监听
```js
transtionend 动画结束事件

```
## transition-timing-function
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)
```js 
贝塞尔曲线 设置
用于设置变化过程中的速度


transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Function values */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1,)
```
## 步进过度效果
```css
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);
```
### step-start  step-end
```css
step-start  == steps(1,start)
step-start  == steps(1,end)
```
## transition-delay 延迟过度
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay)
```css
transition-delay: 3s;
transition-delay: 2s, 4ms; 分别对属性设置延迟

```

