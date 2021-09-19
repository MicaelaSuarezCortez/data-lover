# Data Lovers

## Índice

* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Pruebas unitarias](#pruebas-unitarias)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Herramientas](#herramientas)

***

## Consideraciones generales

* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## Objetivos de aprendizaje
   Aprenderás a:

* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).

## Pruebas unitarias

Para ello te recomendamos implementar las siguiente funció en el archivo
`src/data.js`:

* `filterData(data, filterBy, condition)`: esta función `filter` recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `condition`, nos retornaría aquellos datos que sí cumplan con la condición.


El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).


## Consideraciones técnicas

### `src/index.html`

Existe un archivo `index.html`. Como ya sabrás, acá va la página que se mostrará al usuario. 
También nos sirve para indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

### `src/data`

En esta carpeta están los datos de las diferentes fuentes.

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

### Desarrollo Front-end

* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [json.org](https://json.org/json-es.html)

## Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Bootstrap](https://getbootstrap.com/)
***
