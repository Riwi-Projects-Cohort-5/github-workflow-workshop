# Ejercicios del taller

Trabaja en parejas y **cambia de pareja** en varios ejercicios:
en unos serás autor/a y en otros revisor/a.

## Ejercicio 1 — Fork

1. Ve al repositorio original del taller.
2. Haz clic en **Fork** y confirma la creación.
3. Anota la URL de tu Fork.

## Ejercicio 2 — Clone

```bash
git clone https://github.com/<tu-usuario>/github-workflow-workshop.git
cd github-workflow-workshop
git remote add upstream https://github.com/<organizacion>/github-workflow-workshop.git
git remote -v
```

## Ejercicio 3 — Branch

```bash
git switch main
git fetch upstream
git merge upstream/main
git checkout -b feature/<descripcion-corta>
```

## Ejercicio 4 — Issue

1. Abre `docs/workshop/issues.md`.
2. Elige una issue que nadie haya tomado todavía.
3. Anota su rama sugerida.

## Ejercicio 5 — Desarrollo

1. Implementa el cambio en tu rama.
2. Ejecuta los tests: `npm test`.
3. Compila: `npm run build`.

## Ejercicio 6 — Pull Request

```bash
git add .
git commit -m "Descripción clara del cambio"
git push -u origin <tu-rama>
```

Abre el PR desde tu Fork hacia `upstream/main`. Usa la plantilla y menciona
la issue (`Closes #<número>`).

## Ejercicio 7 — CI

1. Mira la pestaña **Checks** de tu PR.
2. Espera a que el workflow termine.
3. Si falla, corrige, haz commit y vuelve a hacer push.

## Ejercicio 8 — Code Review

1. Revisa el PR de otra persona.
2. Aplica la guía de [code review](code-review.md).
3. Deja al menos un comentario, aprobación o petición de cambios.

## Ejercicio 9 — Cambios

1. Atiende el feedback de tu revisor/a.
2. Corrige en tu rama, haz commit y push.
3. Confirma que los checks vuelven a pasar.

## Ejercicio 10 — Merge

1. Con al menos una aprobación y CI en verde, mergea el PR.
2. Verifica que la issue quede cerrada automáticamente.

## Ejercicio 11 — Sincronizar

```bash
git switch main
git fetch upstream
git merge upstream/main
git push origin main
```

## Ejercicio 12 — Repetir

1. Elige otra issue.
2. Repite el ciclo con una pareja distinta.
3. Cambia de rol: si antes fuiste autor/a, ahora intenta ser revisor/a.
