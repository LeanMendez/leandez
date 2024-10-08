---
title: "Diferencias entre ngModel y formControl"
pubDate: 2024-10-05
draft: false
tags: ["Angular", "Programming", "Angular Forms"]
slug: diferencias-entre-ngModel-y-formControl
share: { title: "Diferencias entre ngModel y formControl", description: "Diferencias entre ngModel y formControl" }
---

# Diferencias entre ngModel y formControl

### ngModel
Sirve para hacer double-binding entre elementos. 
La sintaxis es la famosa **banana-box** que se forma al tener corchetes y paréntesis dentro. [()]
Un ejemplo clásico de su uso es cuando se quiere conectar en dos sentidos una propiedad dentro de una clase con un valor de un input.

### formControl
Sirve para controlar los elementos de un formulario.
Permite una forma sencilla de validación, ya sea con validators pre construidos provenientes de Angular Forms, como asi tambien de validadores personalizados que podemos construir.

```ts
// archivo TS del componente
import { Component } from @angular/core
import { FormControl, Validators } from @angular/forms

@Component({
selector: "sz-input", 
templateUrl: "./input.component.html", 
})

export class InputComponent {
// Con esta simple linea de codigo, ya estoy teniendo control sobre el form
form: FormControl = new FormControl("", [Validators.required])
}
```

```html
<input [formControl]="form" />
```


### Referencias
- Gentleman Programming - [ngModel vs Form Control, lucha de titanes!](https://www.youtube.com/watch?v=33xfj_I51B0)
- Angular Documentation - [FormControl from angular.io](https://v17.angular.io/api/forms/FormControl)
- Angular Documentation - [Reactive Forms from angular.dev](https://angular.dev/guide/forms/reactive-forms)


