# Symbol
[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
```
每个从 Symbol() 返回的 symbol 值都是唯一的。
```

### Symbol.for(name)
```
若已经注册 直接拿取 ,否则创建

```


### Symbol 属性遍历
```js
Object.keys()
for in 都获取不到symbol 属性


获取所有Symbol 属性
Object.getOwnPropertyDescriptor()

获取所有的keys 包括 symbol属性
Reflect.ownKeys()

```