# Issues de ejemplo

Este catálogo documenta las issues que los participantes pueden elegir.
Cada issue incluye descripción, criterios de aceptación, etiquetas y una
rama sugerida. Las issues son **independientes** entre sí.

> Las issues también pueden crearse directamente en GitHub usando las
> plantillas de `.github/ISSUE_TEMPLATE/`. El número de issue real lo
> asigna GitHub al crearla.

## Issue 1 — [Feature] Añadir valoración de películas

- **Etiquetas:** `feature`, `good-first-issue`
- **Rama sugerida:** `feature/movie-rating`

**Descripción:** las tarjetas de película no muestran ninguna valoración.
Añade un campo `rating` (0–10) a los datos de ejemplo y muéstralo en cada
tarjeta de la página de Películas.

**Criterios de aceptación:**

- [ ] Las 5 películas tienen un valor de `rating` en `src/data/movies.ts`
- [ ] La tarjeta muestra el rating de forma clara
- [ ] `npm test` pasa y `npm run build` compila

## Issue 2 — [Feature] Estado vacío en Reservas

- **Etiquetas:** `feature`, `good-first-issue`
- **Rama sugerida:** `feature/empty-state-reservations`

**Descripción:** la página de Reservas muestra una tabla vacía cuando no
hay datos. Añade un mensaje de estado vacío ("No hay reservas todavía")
que se muestre cuando la lista no contenga reservas.

**Criterios de aceptación:**

- [ ] Con datos, se muestra la tabla como hasta ahora
- [ ] Con lista vacía, se muestra el mensaje y no la tabla
- [ ] El estado vacío es visible y accesible

## Issue 3 — [Bug] Estado incorrecto de reservas

- **Etiquetas:** `bug`
- **Rama sugerida:** `fix/reservation-status`

**Descripción:** algunas reservas muestran un estado incorrecto. Una
reserva cuya sesión ya pasó aparece como *pendiente*, cuando no debería
seguir activa. Revisa `src/utils/reservationStatus.ts`.

**Criterios de aceptación:**

- [ ] Una sesión pasada muestra el estado correcto
- [ ] La sesión de hoy y las futuras siguen mostrando *confirmada*
- [ ] Una reserva marcada como cancelada muestra *cancelada*
- [ ] Hay un test que cubre el caso de la sesión pasada

## Issue 4 — [Bug] Sidebar responsive

- **Etiquetas:** `bug`
- **Rama sugerida:** `fix/sidebar-responsive`

**Descripción:** en pantallas pequeñas el sidebar ocupa todo el ancho y
comprime el contenido. Haz que el layout sea usable en móviles.

**Criterios de aceptación:**

- [ ] En pantallas anchas el layout se mantiene igual
- [ ] En pantallas pequeñas el contenido sigue siendo legible
- [ ] No se necesita un dispositivo: prueba con el DevTools del navegador

## Issue 5 — [Docs] Documentar la puesta en marcha

- **Etiquetas:** `documentation`
- **Rama sugerida:** `docs/setup`

**Descripción:** mejora la documentación de instalación y comandos en el
`README.md`: requisitos, pasos, comandos y solución de problemas básicos.

**Criterios de aceptación:**

- [ ] El README permite ejecutar el proyecto en menos de 5 minutos
- [ ] Los comandos de `dev`, `build` y `test` están documentados
- [ ] La documentación está en español

## Issue 6 — [Refactor] Extraer componente MovieCard

- **Etiquetas:** `refactor`
- **Rama sugerida:** `refactor/movie-card`

**Descripción:** la tarjeta de película está definida como marcado inline
en `src/pages/Movies.tsx`. Extrae un componente reutilizable
`src/components/MovieCard.tsx` que reciba una película como prop.

**Criterios de aceptación:**

- [ ] `MovieCard` recibe una prop `movie` y renderiza el mismo contenido
- [ ] `Movies.tsx` usa el nuevo componente
- [ ] El comportamiento visual no cambia

---

# Desafíos de revisión

Las siguientes 4 issues están pensadas para generar PRs que exigen una
revisión cuidadosa. Cada una indica **qué debe evaluar quien revisa**,
pero el defecto intencional no aparece en el texto de la issue.

## Issue 7 — [Feature] Filtrar películas por género

- **Etiquetas:** `feature`, `review-challenge`
- **Rama sugerida:** `feature/filter-movies`
- **Para revisión, evalúa:** **nombres y legibilidad**

**Descripción:** añade un selector de género en la página de Películas
que filtre la lista.

**Criterios de aceptación:**

- [ ] El selector lista los géneros presentes en los datos
- [ ] Filtrar muestra solo las películas de ese género
- [ ] "Todos" restablece la lista completa

## Issue 8 — [Feature] Ordenar reservas por fecha

- **Etiquetas:** `feature`, `review-challenge`
- **Rama sugerida:** `feature/sort-reservations`
- **Para revisión, evalúa:** **tests**

**Descripción:** ordena la tabla de Reservas por fecha, de la más próxima
a la más lejana.

**Criterios de aceptación:**

- [ ] Las reservas aparecen ordenadas por fecha
- [ ] El orden es correcto tras modificar los datos

## Issue 9 — [Feature] Mostrar la duración de la película

- **Etiquetas:** `feature`, `review-challenge`
- **Rama sugerida:** `feature/movie-duration`
- **Para revisión, evalúa:** **alcance del PR**

**Descripción:** muestra la duración (en minutos) en cada tarjeta de
película.

**Criterios de aceptación:**

- [ ] Cada tarjeta muestra la duración
- [ ] Los datos de ejemplo ya incluyen la duración

## Issue 10 — [Feature] Contar reservas por estado en el Dashboard

- **Etiquetas:** `feature`, `review-challenge`
- **Rama sugerida:** `feature/reservation-status-count`
- **Para revisión, evalúa:** **lógica**

**Descripción:** añade al Dashboard el número de reservas en cada estado
(*confirmada*, *cancelada*, *pendiente*).

**Criterios de aceptación:**

- [ ] El Dashboard muestra el conteo de cada estado
- [ ] Los conteos se calculan a partir de los datos reales

---

# Notas para el facilitador (no compartir con participantes)

El objetivo no es engañar, sino practicar la revisión. Estas notas se usan
para **sembrar** el defecto en el PR cuando la implementación no lo
produzca de forma natural, o para guiar la revisión.

| Issue | Defecto esperado en el PR |
| ----- | ------------------------- |
| 7 (filtrar por género) | Nombres crípticos (`x`, `a`, `yy`) y comparaciones confusas: la funcionalidad funciona pero el código no es legible. |
| 8 (ordenar por fecha) | No hay ningún test para la nueva lógica de ordenamiento. |
| 9 (duración) | Cambios no relacionados: retoques de CSS global, renombrados o ajustes fuera del alcance de la issue. |
| 10 (contar estados) | Bug de lógica pequeño (p. ej. contar una sola categoría o un límite incorrecto) dentro de una funcionalidad que parece correcta. |

El texto de cada issue ya indica qué dimensión evaluar; el defecto concreto
se deja a la implementación o se siembra en la rama de ejemplo.
