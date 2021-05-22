---
title: WIP- Go for Javascript Developers
date: "2019-03-12T21:12:03.284Z"
description: Get your hands dirty with Golang
tags:
  [
    "go",
    "golang",
    "javascript",
  ]
---

## Go

Variable declaration is as is:

```go
var name string
name = "Oguzhan"

const constant = 3.14
```

When in a scope (between curly braces), you can utilize type inference

```go
func main() {
  name := "Oguzhan"
}
```

Built in types

````
bool string
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr
byte // alias for uint8
rune // alias for int32
float32 float64
complex64 complex128
```

- No semicolon at the end of the instructions
- There is no `try catch` mechanism in Go. Manuel error checking

```go
res, err = call()
if err != nil {
  return
}
````

- Functions may return multiple values

```go
func helloWorld() -> string, error {
  return "Hello World", nil
}
```

- There is no concept of `class`. Use `struct` instead

```go
type Car struct {
  year int
  model string
  brand string
  color string
}
```

You can add methods to the `struct`

```go
func (c Car) run () {
  fmt.Println("Car is running")
}
```

You can mutate existing properties of a `struct`

```go
func (c *Car) changeColor(color string) {
  c.color = color
}
```
