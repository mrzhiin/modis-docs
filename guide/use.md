# 使用

## 引用

### npm/yarn

```
nnpm i @mrzhiin/modis

yarn add @mrzhiin/modis
```

### 浏览器

- 完整

```html
<script src="path/modis.min.js"></script>
```

- 精简

```html
<script src="//cdn.jsdelivr.net/npm/leancloud-storage@3.11.0/dist/av-min.js"></script>
<script src="path/modis.slim.min.js"></script>
```

## 调用

```html
<div id="modis"></div>

<script>
  new Modis({
    el: "#modis",
    backend: "leancloud",
    backendConfig: {
      appId: "<leancloud appId>",
      appKey: "<leancloud appKey>"
    }
  });
</script>
```
