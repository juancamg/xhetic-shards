# Cross-Site Scripting (XSS)

## ¿Qué es XSS?
XSS es una vulnerabilidad que permite a atacantes inyectar scripts maliciosos en páginas web vistas por otros usuarios.

## ¿Para qué sirve?
Se usa para robar cookies, redirigir usuarios, o mostrar contenido malicioso.

## Tipos de XSS
- **Reflejado (Reflected):** El script se refleja en la respuesta del servidor.
- **Persistente (Stored):** El script se almacena en el servidor (ej. en una base de datos).
- **DOM-based:** Se ejecuta en el cliente manipulando el DOM.

## ¿Cómo funciona?
Un atacante encuentra un campo de entrada (como un formulario) que no valida correctamente y envía algo como:
```html
<script>alert('Hacked!');</script>