# Tutorial de React Hooks

Este proyecto tutorial de React explora el uso de varios hooks importantes, incluyendo `useState`, `useCallback`, `useMemo` y `useEffect`. Estos hooks son fundamentales en el desarrollo de aplicaciones React y ayudan a manejar el estado y los efectos secundarios.

## Configuración

Para ejecutar este proyecto, asegúrate de tener Node.js y npm instalados. Luego, sigue estos pasos:

1. Clona el repositorio o descárgalo como archivo ZIP.

2. Navega a la carpeta del proyecto en tu terminal.

3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

Luego, puedes iniciar la aplicación con el siguiente comando:

```bash
npm start
```

La aplicación se abrirá en tu navegador web y podrás interactuar con los ejemplos de los diferentes hooks.

## Hooks Explorados

### useState

El hook useState se utiliza para gestionar el estado en componentes de React. Permite declarar una variable de estado y una función para actualizarla. Ejemplo:

```javascript
import { useState } from "react";

const [count, setCount] = useState(0);
```

### useCallback

El hook useCallback se utiliza para memorizar funciones, lo que es útil cuando se pasa una función como prop a un componente hijo. Evita que la función se vuelva a crear en cada renderizado. Ejemplo:

```javascript
import { useState, useCallback } from "react";

const getItems = useCallback(() => {
  return [input + 10, input + 100];
}, [input]);
```

### useMemo

El hook useMemo se utiliza para memorizar el resultado de una función costosa de calcular, lo que evita cálculos innecesarios en cada renderizado. Ejemplo:

```javascript
import { useState, useMemo } from "react";

const result = useMemo(() => computeExpensiveValue(count), [count]);
```

### useEffect

El hook useEffect se utiliza para realizar efectos secundarios en componentes de React, como realizar llamadas a una API o suscribirse a eventos. Se ejecuta después de cada renderizado. Ejemplo:

```javascript
import { useEffect, useState } from "react";

useEffect(() => {
  setItems(data[currentChoice]);
  console.log("Data is fetched!");
}, [currentChoice]);
```

## Cuándo usar cada hook

- **useState**: Úsalo para gestionar el estado local de un componente, como contar, alternar estados o cualquier otro valor que deba cambiar con el tiempo.

- **useCallback**: Úsalo cuando necesites memorizar funciones que se pasan como props a componentes hijos para evitar renders innecesarios de esos componentes.

- **useMemo**: Úsalo para memorizar el resultado de una función costosa y evitar recálculos innecesarios, especialmente cuando ese resultado se utiliza en la representación del componente.

- **useEffect**: Úsalo para realizar efectos secundarios, como llamadas a una API, actualizaciones del DOM o suscripciones a eventos, después de que un componente se haya renderizado.

¡Disfruta explorando estos hooks en este proyecto tutorial de React!
