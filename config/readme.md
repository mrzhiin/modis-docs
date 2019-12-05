# 通用选项

## el

- 类型：`string/Element`
- 默认值：`""`

CSS 选择器或 DOM 元素

## locale

- 类型：`string`
- 默认值：`"zh-CN"`

显示语言

- `en`：English
- `zh-CN`：Chinese Simplified

## gravatar

- 类型：`string`
- 默认值：`"https://www.gravatar.com/avatar/"`

Gravatar 头像地址

## gravatarParameters

- 类型：`string`
- 默认值：`"?d=mp&s=60"`

请求 Gravatar 头像时附加的参数

## pageSize

- 类型：`number`
- 默认值：`10`

每页评论显示数量

## pathnameGenerator

- 类型：`function`
- 默认值：
  ```js
  function() {
    return window.location.pathname;
  }
  ```

## theme

- 类型：`string`
- 默认值：`auto`

主题颜色

- `auto`
- `light`
- `dark`

## backend

- 类型：`string`
- 默认值：`"leancloud"`

后端服务，当前仅支持 `leancloud` 或 `valine`

## backendConfig

- 类型：`object`
- 默认值：`{}`

后端服务选项
