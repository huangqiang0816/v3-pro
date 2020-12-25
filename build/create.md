1. 安装 ts-loader 需要 tsconfig.js typescript 依赖
2. vue 编译 vue-loader@next @vue/compiler-sfc vue@next
3. .vue 文件支持 ‘lang="ts”’ 需要在

```javascript
{
    test: /\.ts$/,
    loader: "ts-loader",
    exclude: /node_modules/,
    options:{
        // 支持vue 中ts 
        appendTsSuffixTo: [/\.vue$/],
    }
},
```
4. 
