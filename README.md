# Generador de Hashes con bcrypt

Herramienta sencilla en Node.js para generar hashes seguros a partir de una lista de contraseñas predefinida. Ideal para pruebas, demostraciones o para obtener rápidamente un hash que puedas almacenar en una base de datos.

## Código del proyecto

### generadorDeHashs.js

```javascript
// generar-hashes.mjs
import bcrypt from "bcrypt";

const passwords = ["Pass123!", "Segura2024!", "P@ssw0rd#99"];

for (const pwd of passwords) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pwd, salt);
  console.log(`${pwd} → ${hash}`);
}
```

### package.json

```json
{
  "name": "generadordehash",
  "version": "1.0.0",
  "description": "",
  "main": "generadorDeHashs.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node generadorDeHashs.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^6.0.0"
  }
}
```

## Requisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior, por los módulos ES).
- npm (incluido con Node.js).

## Instalación

```bash
npm install
```

## Uso

```bash
npm start
```

O directamente con Node:

```bash
node generadorDeHashs.js
```

### Salida esperada (los hashes variarán por el salt aleatorio)

```
Pass123! → $2b$10$...
Segura2024! → $2b$10$...
P@ssw0rd#99 → $2b$10$...
```

## Personalización

Modifica el array `passwords` en `generadorDeHashs.js` con las contraseñas que necesites hashear.

## Dependencias

- [bcrypt](https://www.npmjs.com/package/bcrypt) (^6.0.0): librería de hashing segura.

## Licencia

ISC
