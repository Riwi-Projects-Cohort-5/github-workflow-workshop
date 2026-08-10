# Solución de problemas

## `origin` no es mi repositorio

Verifica con `git remote -v`. `origin` debe apuntar a tu Fork y `upstream`
al repositorio original. Corrige con:

```bash
git remote set-url origin https://github.com/<tu-usuario>/github-workflow-workshop.git
```

## La rama `main` de mi Fork está atrasada

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

## Mi PR dice "This branch has conflicts"

Actualiza tu rama desde `main`:

```bash
git fetch upstream
git merge upstream/main
```

Resuelve los conflictos, haz commit y push.

## CI falla en mi PR

- Corre localmente: `npm ci && npm test && npm run build`.
- Lee el log del paso que falla en la pestaña **Checks**.
- Haz el fix, commit y push: el workflow se vuelve a ejecutar.

## Mis tests pasan localmente pero fallan en CI

- Verifica que no dejaste archivos sin commitear que dependan del entorno.
- Compara la versión de Node: CI usa Node 22.

## Olvidé crear una rama

```bash
git switch -c feature/<descripcion-corta>
git add .
git commit -m "..."
```

## Hice commit en `main` por accidente

```bash
git switch -c feature/<descripcion-corta>
```

El commit se mueve junto con la rama. Luego puedes actualizar tu `main`
desde `upstream`.

## No tengo permisos de push

Estás intentando hacer push al repositorio original. Haz push a tu **Fork**:

```bash
git push origin <tu-rama>
```

## No encuentro la opción de aprobar

Busca **Review changes** arriba a la derecha del PR y elige *Approve*
o *Request changes*.

## Mi PR no puede mergear ("Branch protection")

`main` está protegido: necesitas al menos una aprobación, CI en verde
y sin conversaciones sin resolver.
