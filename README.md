````md
# Sabores de la Casa

## 1. Objetivo del proyecto

Sabores de la Casa es una interfaz web para un restaurante ficticio. El proyecto tiene como objetivo presentar información del restaurante, mostrar su menú y permitir que los usuarios realicen una solicitud de reserva mediante un formulario.

El proyecto se enfoca principalmente en la capa de presentación de una arquitectura por capas, utilizando HTML5 para la estructura, CSS3 para la presentación y JavaScript para una interacción básica del formulario.

---

## 2. Variante asignada

### Contexto

Restaurante.

### Restricción visual

Paleta de colores clara con un color de acento.

### Requisito técnico

Diseño de tres o más tarjetas de productos utilizando Flexbox.

En el proyecto se implementaron cuatro tarjetas para demostrar la reutilización del componente.

---

## 3. Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Flexbox
- Git
- GitHub
- Visual Studio Code

---

## 4. Estructura del proyecto

```text
taller-html-css/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── img/
│
├── evidencias/
│   ├── preguntas_mano.jpg
│   ├── captura_desktop.png
│   ├── captura_mobile.png
│   │
│   └── ia/
│       └── registro_ia.md
│
└── README.md
````

---

## 5. ¿Cómo ejecutar el proyecto?

Para ejecutar el proyecto se deben seguir estos pasos:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `taller-html-css` en Visual Studio Code.
3. Abrir el archivo `index.html`.
4. Ejecutar el archivo utilizando un navegador web.

También se puede utilizar una extensión como Live Server en Visual Studio Code para visualizar los cambios automáticamente.

---

## 6. Características principales

El sitio web cuenta con:

* Encabezado con el nombre del restaurante.
* Menú de navegación con cuatro enlaces internos.
* Sección principal de bienvenida.
* Botón para acceder al menú.
* Sección de menú.
* Cuatro tarjetas de platos.
* Imágenes y descripciones de los productos.
* Precios.
* Sección institucional "Sobre Nosotros".
* Formulario de reservas.
* Validación básica mediante HTML5.
* Casilla de aceptación de datos.
* Mensaje de confirmación mediante JavaScript.
* Diseño responsive.
* Estados `:hover` y `:focus`.
* Uso de Flexbox para la distribución de las tarjetas.

---

## 7. Decisiones de diseño

### Decisión 1: Uso de una paleta de colores cálidos

Se utilizaron colores claros para el fondo y tonos marrones para representar la identidad visual de un restaurante.

El color naranja se utilizó como color de acento para destacar botones y precios.

Esta decisión permite mantener una apariencia relacionada con la temática gastronómica y facilita la identificación de los elementos importantes.

### Decisión 2: Uso de tarjetas para el menú

Los platos fueron organizados mediante tarjetas reutilizables.

Cada tarjeta contiene una imagen, nombre del plato, descripción y precio.

Se utilizó Flexbox para organizar las tarjetas y permitir que se adapten al espacio disponible.

### Decisión 3: Diseño responsive

Se utilizaron media queries para adaptar la página a diferentes tamaños de pantalla.

En computadores se muestran varias tarjetas por fila, mientras que en dispositivos pequeños las tarjetas se organizan verticalmente.

Esto permite mejorar la navegación y evitar problemas de visualización en celulares.

---

## 8. Formulario y accesibilidad

El formulario de reservas utiliza etiquetas `label` asociadas correctamente con los campos mediante los atributos `for` e `id`.

Se utilizaron diferentes tipos de entrada:

* `text`
* `email`
* `tel`
* `number`
* `date`
* `textarea`
* `checkbox`

Los campos obligatorios utilizan el atributo `required`.

También se implementaron estados visuales de `:focus-visible` para facilitar la identificación del elemento que está siendo seleccionado.

---

## 9. Diseño responsive

El proyecto fue probado en diferentes tamaños de pantalla:

* Aproximadamente 1200 px para escritorio.
* Aproximadamente 768 px para tablet.
* Aproximadamente 390 px para celular.

Se realizaron ajustes en la navegación, tarjetas, formulario, tamaños de texto y espacios para facilitar la visualización en dispositivos pequeños.

---

## 10. Uso de Inteligencia Artificial

Se utilizó ChatGPT como herramienta de apoyo durante el desarrollo del proyecto.

La Inteligencia Artificial fue utilizada para:

* Revisar la estructura HTML.
* Identificar elementos faltantes en el formulario.
* Proponer mejoras de CSS.
* Ayudar con Flexbox y diseño responsive.
* Revisar problemas de accesibilidad.
* Explicar conceptos utilizados en el código.

Las sugerencias fueron revisadas y modificadas según los requisitos del taller.

El registro completo del uso de Inteligencia Artificial se encuentra en:

`evidencias/ia/registro_ia.md`

---

## 11. Evidencias

El proyecto debe contener las siguientes evidencias:

* Preguntas respondidas a mano.
* Captura del diseño en escritorio.
* Captura del diseño en dispositivo móvil.
* Registro del uso de Inteligencia Artificial.

Las evidencias se encuentran dentro de la carpeta:

`evidencias/`

---

## 12. Arquitectura futura

El proyecto actual corresponde principalmente a la capa de presentación.

La arquitectura futura podría organizarse de la siguiente manera:

```text
USUARIO
   ↓
CAPA DE PRESENTACIÓN
HTML + CSS + JavaScript
   ↓
CAPA DE LÓGICA / SERVICIOS
   ↓
CAPA DE DATOS
BASE DE DATOS
```

Actualmente no se utiliza una base de datos ni un servidor. El formulario solamente demuestra una interacción básica mediante JavaScript.

En una versión futura, el formulario podría conectarse con una capa de servicios y posteriormente almacenar las reservas en una base de datos.

---

## 13. Control de versiones

El proyecto será gestionado utilizando Git y GitHub.

Se realizarán commits que representen avances importantes del desarrollo.

Ejemplo de commits:

```text
estructura html semántica
formulario de reservas
estilos y componentes
responsive y ajustes finales
```

---

## 14. Autor


Proyecto académico realizado por Kevin Buitrago