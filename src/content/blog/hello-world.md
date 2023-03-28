---
# draft(false), title, description, publishDate, image?, tags? 
draft: true
title: Hello, World
description: Welcome to my blog.
publishDate: 2023-03-25
image: 
    src: ./_hello_world_c.png
    alt: hello world program in C code
---

### Yes, I know

First of all, welcome to my my tech blog. My name is Conall, I'm a software engineer based in Tokyo.

While i'm sure it's some kind of cardinal sin to call your first post "Hello, World", I felt like following tradition this time. I can only ask, in advance, for your forgiveness.

### Let's Go

The picture above shows the classic hello world in C, but I'm more of a gopher myself so in this first post I thought I would explain how to get up and running with a "Hello World" program in Go.

With go downloaded, change directory into where you want to work and run the following commands.

``` sh
#!/bin/sh
mkdir hello_world
cd hello_world && touch hello.go
```

Open hello.go in your favourite text editor and type out the following...

``` go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World")
}

```
