---
title: "First Post"
pubDate: 2024-03-01
draft: true
tags: ["blog", "cosas", "cool"]
slug: first-post
share: { title: "First Post", description: "This is my first post" }
---


# Introducción a Golang

<p class="lead">Go (o Golang) es un lenguaje de programación moderno creado por Google. Su diseño minimalista y su rendimiento eficiente lo hacen ideal para aplicaciones de alta demanda.</p>


## ¿Qué es Golang?

> Go es un lenguaje compilado, concurrente y **fuertemente tipado**.  
> Fue diseñado para facilitar el desarrollo de aplicaciones **de alto rendimiento**.

Go tiene varias características que lo destacan:

- **Eficiencia:** Utiliza un recolector de basura eficiente.
- **Simultaneidad:** Los _goroutines_ y _channels_ facilitan la programación concurrente.
- **Compilación rápida:** Go compila código muy rápidamente.

## Sintaxis básica de Go

Para empezar con Go, aquí tienes un ejemplo del típico _Hello World_:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

La estructura del código es bastante simple y directa. Aquí es donde Go se destaca por su simplicidad.

## Declaración de Variables
Go utiliza la palabra clave var para declarar variables. También permite la inferencia de tipos:

```go
var x int = 10
y := 20
```
Ambos son métodos válidos para declarar variables en Go. El símbolo := permite la declaración implícita.

## Ciclos en Go
El único ciclo disponible en Go es el ciclo *for*, el cual puede usarse de diferentes maneras:

```go
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```
Este ciclo imprime los números del 0 al 9. En Go, los ciclos son sencillos pero poderosos.

## Tablas en Go
Las tablas en Go se pueden representar de la siguiente manera:


| Comando | Descripción |
| -------- | ---------- |
| go run | Ejecuta el código |
| go build | Compila el código |
| go test | Prueba el código |

## Concurrencia en Go
Una de las características más importantes de Go es su capacidad para manejar concurrencia utilizando goroutines:

```go
go func() {
    fmt.Println("Esto es una goroutine")
}()
```

La concurrencia es fácil de usar en Go, pero requiere precaución.

<hr>

## Citas importantes

<quote>
"Go es un lenguaje que te permite trabajar de manera eficiente y escribir código limpio."
— Desarrollador Gopher
</quote>

## Referencias

- [Golang](https://golang.org/)
- [Go Playground](https://play.golang.org/)
- [Go Docs](https://golang.org/doc/)
