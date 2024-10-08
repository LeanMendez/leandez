---
title: "React Re-renders"
pubDate: 2024-09-22
tags: ["react", "frontend", "programación"]
slug: react-re-renders
share: { title: "React Re-renders", description: "Que es un re-render" }
---

# React Re-renders

Re-renderizar es la acción que lleva a cabo React para actualizar un componente con datos nuevos. Esta acción es necesaria para que la aplicación sea dinámica y responda a interacciones con el usuario o una fuente externa de datos.

React tiene la particularidad de manejar sus re-renders como una cascada a través del árbol de componentes de la aplicación. Es decir que si el componente que esta en nuestra raíz se re-renderiza, todos los componentes hijos de este sufrirán un re-render también.

Los cambios en el estado de un componente son la causa principal de que se produzca un re renderizado. Y como mencionamos anteriormente, este proceso se realiza en cascada hacia abajo desde el componente al que se le ha cambiado el estado, hasta el ultimo de sus componentes hijos de forma descendente.

Es importante aclarar que este proceso siempre ocurre de forma descendente, y los renderizados de los componentes hijos no afectan a los componentes padres.




### Referencias
