# css透视动画
## transform
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
```css

transform: translateX(100%) translateY(100%); 

```
### translate xy同时设置
```
transform:stranslate(x,y)
``` 
### translate3d
```
xyz 轴尺寸
```
### translateX
### translateY

[code1](./1_%E6%B0%B4%E5%B9%B3%E8%BD%B4%E5%92%8C%E5%9E%82%E7%9B%B4%E8%BD%B4.html)

[code2](./2_%E8%BD%B4.html)

## 缩放属性
### scaleX 
### scaleY
### scale
### scale3d
### scaleZ

## 改变缩放基点
### tansform-origin
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

## transition 过度
```
让那个元素过度 就加载那个元素上面
```

## filter 镜像模糊
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
```

```

## 旋转 (rotate)
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate)
### rotateX
### rotateY
### rotateZ
### rotate
### rotate3d
```
向量值
```

## 倾斜 skew
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skew)
### skewX
### skewY
### skew
### skew3d

## 元素变形的参考点(锚点)
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)
### transform-origin
```js
transform-origin:x y;
transform-origin:x y z;
```
## 透视
### perspective
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)
```css
perspective(v)  摄像头和transform 移动

设置透视属性 摄像头正面看
div{
    perspective:xxx
}

```
## 3d空间样式的设置
### transform-style
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style)
```js
/* Keyword values */
transform-style: flat;// 平面
transform-style: preserve-3d; //3d
```

## perspective-origin 观看物体的视角改变

### backface-visibility 背面不可见
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility)
```css
note:实验属性
backface-visibility: visible;
backface-visibility: hidden;
```
