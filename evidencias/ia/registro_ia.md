````md
# Registro de uso de Inteligencia Artificial

## Herramienta utilizada

ChatGPT.

## Objetivo del uso de IA

Se utilizó Inteligencia Artificial como apoyo durante el desarrollo del proyecto para recibir ideas, revisar el código, solucionar problemas de diseño y comprender mejor algunos conceptos de HTML y CSS.

La IA no fue utilizada únicamente para copiar el código. Las sugerencias fueron revisadas y adaptadas de acuerdo con los requisitos establecidos en el taller.

---

# Caso 1 - Sugerencia aceptada después de verificarla

## Objetivo

Mejorar la estructura del formulario de reservas y verificar que cumpliera con los requisitos de HTML5.

## Prompt utilizado

"Revisar el formulario de una página web de restaurante y verificar qué campos hacen falta para cumplir con los requisitos de un formulario HTML5 accesible."

## Respuesta de la IA

La IA indicó que el formulario debía contar con campos correctamente relacionados mediante `label` e `id`, además de utilizar tipos de entrada adecuados como `text`, `email` y `tel`. También recomendó utilizar `required` en los campos obligatorios y agregar una casilla de aceptación.

## Evaluación

Se revisó la recomendación comparándola con los requisitos del taller.

## Decisión

La sugerencia fue aceptada después de verificarla porque coincidía con los requisitos solicitados para el formulario.

## Resultado

Se agregó al formulario:

- Nombre.
- Correo electrónico.
- Teléfono.
- Asunto.
- Número de personas.
- Fecha.
- Mensaje.
- Casilla de aceptación.
- Botón de envío.

---

# Caso 2 - Sugerencia modificada

## Objetivo

Mejorar la distribución de las tarjetas del menú para que funcionaran correctamente en diferentes tamaños de pantalla.

## Prompt utilizado

"Revisar la distribución de las tarjetas de un restaurante y proponer una solución responsive utilizando Flexbox."

## Respuesta de la IA

La IA recomendó utilizar Flexbox para organizar las tarjetas, permitir que los elementos ocuparan el espacio disponible y utilizar `flex-wrap` para que las tarjetas pudieran pasar a otra fila cuando fuera necesario.

## Evaluación

La propuesta era adecuada para el proyecto, pero fue necesario modificar algunos valores para adaptarlos al diseño y a los tamaños de pantalla solicitados en el taller.

## Decisión

La sugerencia fue modificada.

Se utilizaron propiedades como:

```css
.platos {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

article {
    flex: 1 1 280px;
}
````

También se realizaron ajustes mediante media queries para tablet y celular.

## Resultado

Las tarjetas se reorganizan automáticamente según el ancho disponible y se pueden utilizar más tarjetas sin tener que crear un diseño diferente para cada una.

---

# Caso 3 - Sugerencia rechazada

## Objetivo

Mejorar la accesibilidad y los estados visuales de los elementos interactivos.

## Prompt utilizado

"¿Qué cambios de CSS puedo realizar para mejorar la accesibilidad de los botones y enlaces de una página web?"

## Respuesta de la IA

La IA recomendó agregar diferentes estilos para los estados `:hover` y `:focus`, además de utilizar un contorno visible para indicar cuándo un elemento recibe el foco.

## Evaluación

La recomendación general era correcta, pero algunas propuestas visuales no coincidían con el diseño elegido para el restaurante.

## Decisión

Se rechazaron algunas de las propuestas visuales y se conservó únicamente una solución sencilla que mantuviera la estética del proyecto.

Se decidió utilizar:

```css
:focus-visible {
    outline: 3px solid var(--color-accent);
    outline-offset: 3px;
}
```

## Resultado

Los enlaces, botones y campos del formulario tienen un estado de foco visible sin modificar demasiado el diseño visual de la página.

---
