---
title: "Problemas con Re-renders en React"
pubDate: 2024-09-26
tags: ["react", "frontend", "programación"]
slug: problemas-con-re-renders-en-react
share: { title: "Problemas con Re-renders en React", description: "Que problemas puede tener un re-render" }
---


# Problemas con Re-renders

Los re-renders en una aplicación de React son necesarios para que la aplicación sea interactiva. Sin embargo en muchas ocasiones pueden traer problemas de performance bastante notorios. 

Supongamos que tenemos una aplicación con varios componentes que realizan cálculos muy demandantes. Y necesitamos agregar un componente muy sencillo a nuestra aplicación, que tiene un estado interno que se actualiza cada vez que apretamos un botón. Si por esas casualidades del universo, decidimos poner el estado de ese componente lo suficientemente arriba en el árbol de componentes, como para que el componente que se hace cargo de ese estado sea padre de los componentes que hacen cálculos pesados, vamos a tener sin dudas un problema de performance. 

Esto ocurre porque cada vez que se actualiza un estado en un componente, por más que este componente no haga uso interno de ese estado, el componente se re-renderizará. Por lo tanto, cada vez que oprimimos nuestro botón, todos esos cálculos se volverán a ejecutar. (Más información en [Re-rendering](https://reactjs.org/docs/react-component.html#shouldcomponentupdate))

Una solución para esto es ser muy conscientes de dónde modificamos estados a lo largo del árbol de componentes. Tiene que ser lo suficientemente arriba como para que la información este disponible para los componentes que la necesitan, pero sin perder de vista que si la colocamos demasiado arriba vamos a estar haciendo que todos los componentes por debajo de ese nivel sufran re-renders cuando el estado cambie.  

Otra posible solución es pasar los componentes que hacen cálculos costosos como children al componente padre. De esta forma serán tomados como props, y no se re renderizarán porque no pertenecerán al componente. 

### Referencias
