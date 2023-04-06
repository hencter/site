+++
date = '2022-07-09T23:08:54+08:00'
draft = false
slug = 'diagrams'
tags = ['Hugo', 'Diagram']
title = 'Diagrams'
+++

## 图表

### GoAT 图表 (Ascii)

GoAT 图表可以通过[这个网站](https://arthursonzogni.com/Diagon/#code_area "Diagon: ASCII art diagram generator")生成

```goat
                                                                             .
    0       3                          P *              Eye /         ^     /
     *-------*      +y                    \                +)          \   /  Reflection
  1 /|    2 /|       ^                     \                \           \ v
   *-------* |       |                v0    \       v3           --------*--------
   | |4    | |7      |                  *----\-----*
   | *-----|-*       +-----> +x        /      v X   \          .-.<--------        o
   |/      |/       /                 /        o     \        | / | Refraction    / \
   *-------*       v                 /                \        +-'               /   \
  5       6      +z              v1 *------------------* v2    |                o-----o
                                                               v
```

### Mermaid 图

Mermaid 图表参考[官网](https://mermaid-js.github.io/mermaid/#/) 进行编辑

#### 流程图

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

#### 时序图

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
