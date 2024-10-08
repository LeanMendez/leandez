---
title: "React Render"
pubDate: 2024-09-20
tags: ["react", "frontend", "programación"]
slug: react-render
share: { title: "React Render", description: "Cómo renderizar en React" }
---

# Render

La acción de renderizar no es más que el proceso mediante el cual la interfaz de usuario se genera y actualiza en el DOM (Document Object Model) del navegador a partir de los componentes de nuestra aplicación.

React basa su sistema de renderizado en el proceso que ellos llaman *reconciliación & Diffing*, que no es más que un algoritmo para identificar las diferencias entre la versión previa del Virtual DOM con la nueva y solamente actualizar los elementos necesarios en el DOM real. Este proceso hace que React tenga una eficiencia muy alta a la hora de renderizar los cambios.

### Referencias
