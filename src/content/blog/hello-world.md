---
# draft(false), title, description, publishDate, image?, tags? 
draft: false
title: Hello, World
description: Welcome to my blog.
publishDate: 2023-04-5
image: 
    src: ./_hello_world_c.png
    alt: hello world program in C code
---

### Yes, I know

First of all, welcome to my my tech blog. My name is Conall, I'm a British software engineer based in Tokyo.

While it's certainly cliché, and I'm sure some kind of cardinal tech sin, to call your first post "Hello, World", I felt like following tradition this time. I hope you will indulge me.

### About me

I am an engineer with interests all across the stack. My favourite programming languages at the moment are Go, TypeScript, Java and Python. I'm also a big fan of PostgreSQL, MySQL, MongoDB, Redis and Docker. I use these technologies in many of my projects.

As for the future, I will be diving into the deep and slightly overhyped world of Rust. I dipped my toe into it about a year and a half ago and I really enjoyed my time learning a whole raft of new concepts that the language relies upon.

### Let's Go

The picture above shows the classic hello world in C, but I'm more of a Gopher myself, so in this first post I thought I would explain how to get up and running with a "Hello World" program in Go.

With go downloaded, change directory into where you want to work and run the following commands.

``` sh
mkdir hello_world
cd hello_world && touch hello.go
go mod init hello
```

In this series of commands we have;

- Created a new directory along with a go file (anything that ends with .go).
- Initialised a Go module.

_hello.go_ will be the entrypoint to our program. Now open _hello.go_ in your favourite text editor and type out the following...

``` go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}

```

The first statement in a Go file must be a package name. Packages names are generally concise, and the package name _main_ is special as it from _package main_ that we build executables.

Next we have an import, the _fmt_ package (pronounced 'fumpt'). This is a really useful package in the standard library that helps with formatting.

Finally we have our _main_ function. This function will be called automatically when we start our program. Inside _main_ we call the Println function from the _fmt_ package. As you might expect, this prints our argument, in this case "Hello, World!" to standard out.

Finally we can run our program, or build an executable file with:

```sh
go run hello.go
go build hello.go
```

If all has gone well, you should see "Hello, World!" printed in the terminal.

Hopefully you can use this as a starting point on your Go journey. There are plently of great resources on learning go but if you have trouble finding where to start feel free to reach out and I will be happy to point you in the right direction.
