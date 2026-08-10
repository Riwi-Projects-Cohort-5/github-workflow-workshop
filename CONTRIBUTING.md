# Cómo contribuir

Gracias por participar en el taller. Este repositorio se mantiene mediante
el modelo **Fork & Pull Request**.

## Regla de oro

**Nunca hagas push directo a `main`.** `main` es una rama protegida que
actúa como punto de integración.

## Flujo de contribución

1. Haz un **Fork** de este repositorio en GitHub.
2. Clona tu Fork:

   ```bash
   git clone https://github.com/<tu-usuario>/github-workflow-workshop.git
   cd github-workflow-workshop
   ```

3. Configura el repositorio original como `upstream`:

   ```bash
   git remote add upstream https://github.com/<organizacion>/github-workflow-workshop.git
   ```

4. Crea una rama con un nombre descriptivo:

   ```bash
   git checkout -b feature/<descripcion-corta>
   ```

5. Implementa el cambio.
6. Haz commit y push a tu Fork:

   ```bash
   git add .
   git commit -m "Descripción clara del cambio"
   git push -u origin feature/<descripcion-corta>
   ```

7. Abre un **Pull Request** hacia `upstream/main`.
8. Responde al **code review** y ajusta tu rama si te piden cambios.

## Buenas prácticas

- Crea una rama por cada issue o tarea.
- Haz commits pequeños con mensajes descriptivos.
- Antes de abrir el PR: `npm test` y `npm run build`.
- Mantén el PR enfocado: sin cambios no relacionados.
- Elige una issue y menciónala en el PR (ej. `Closes #12`).

## Comandos útiles

```bash
npm test          # ejecuta los tests
npm run build     # compila el proyecto
```

Para mantener tu Fork sincronizado con `upstream`, consulta
[docs/workshop/workflow.md](docs/workshop/workflow.md).
