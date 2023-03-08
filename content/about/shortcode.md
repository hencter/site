+++
categories = ['简码', '演示']
date = '2022-08-23T11:26:30+08:00'
slug = 'shortcode'
tags = ['Shortcode']
title = 'Shortcode'
+++

## 说明

Shortcode 用于再 Makrdown 中扩展一些 Makdown 本身不支持的特性。

## 内置简码展示

### `<figure>` 可附标题内容元素

{{< figure src="/media/hencter.jpg" caption="了解更多：" attr="亦幸" attrlink="/about" >}}

### 语法高亮

指定高亮某行代码，

```markdown
{{</* highlight go "linenos=ture,hl_lines=2 7 3-5,linenostart=1" */>}}
package main

import "fmt"

func main() {
fmt.Println("Hello, 世界")
}
{{</* /highlight */>}}
```

{{< highlight go "linenos=ture,hl_lines=2 7 3-5,linenostart=2" >}}
package main

import "fmt"

func main() {
fmt.Println("Hello, 世界")
}

{{< /highlight >}}

## 自定义简码展示

### 简单进度条

{{< progress max="100" value="60" >}}

<!-- 

### fontawesome

品牌图标

{{< fa brand="true" icon="rust" size="100px">}}

{{< fa style="solid" icon="bug" >}}

```markdown
{{</* fa icon="house" */>}}
```
-->
