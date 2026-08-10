# CineScope Admin — Taller de GitHub

> Repositorio de trabajo para la **Sesión 2** del taller de Git/GitHub.
> Es una aplicación **intencionalmente pequeña** creada para practicar el
> flujo de colaboración con **Forks** en GitHub.

## ¿Qué es CineScope Admin?

Una aplicación web sencilla para administrar un cine: películas, reservas
y un dashboard con estadísticas básicas. Usa datos de ejemplo en memoria
(sin backend, sin base de datos).

## Propósito del repositorio

No es una aplicación de producción. Su propósito es **enseñar el flujo de
trabajo de GitHub**:

```
Fork → Clone → Branch → Changes → Commit → Push → Pull Request →
Code Review → CI → Merge → Issue cerrada
```

El repositorio funciona como **punto de integración**: nadie hace push
directo a `main`. Todas las contribuciones llegan a través de un **Fork**.

## Stack

| Tecnología | Rol |
| ---------- | --- |
| React 18 + TypeScript | Interfaz |
| Vite | Build y servidor de desarrollo |
| React Router | Navegación entre páginas |
| Vitest + Testing Library | Tests |

## Puesta en marcha

Requisitos: **Node.js ≥ 20** y **npm**.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Comandos

| Comando | Qué hace |
| ------- | -------- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila el proyecto |
| `npm run preview` | Previsualiza el build |
| `npm test` | Ejecuta los tests una vez |
| `npm test -- --watch` | Ejecuta los tests en modo watch |

## Modelo de contribución

Este taller usa el modelo **Fork & Pull Request**:

- `upstream` = este repositorio (el original)
- `origin` = tu Fork personal

Nunca hagas push directamente a `main`. Guías del taller:

- [Flujo de trabajo](docs/workshop/workflow.md)
- [Ejercicios del taller](docs/workshop/exercises.md)
- [Guía de code review](docs/workshop/code-review.md)
- [Issues de ejemplo](docs/workshop/issues.md)
- [Solución de problemas](docs/workshop/troubleshooting.md)

Consulta también [CONTRIBUTING.md](CONTRIBUTING.md).

## Nota

Este es un repositorio de **workshop**: mantén el alcance pequeño y
céntrate en el flujo de GitHub, no en la aplicación.
