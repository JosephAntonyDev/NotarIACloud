# NotarIA Cloud · API (placeholder)

Esta carpeta está reservada para el backend futuro de la landing pública. Hoy la landing es 100% estática y no depende de esta API para funcionar.

## Propósito

Cuando se habilite, esta API servirá endpoints públicos ligeros que la landing podrá consumir, por ejemplo:

- `POST /api/contact` — recibir solicitudes de demo desde el formulario de `#contacto`
- `GET  /api/partners` — listar notarías asociadas (hoy vive en `frontend/js/models/PartnersModel.js`)
- `GET  /api/plans` — listar planes vigentes (hoy vive en `frontend/js/models/PlansModel.js`)

## Cómo activarla desde el frontend

En `frontend/js/app.js`, el `FormController` acepta un endpoint opcional:

```js
new FormController('#contactForm', 'http://localhost:3001/api/contact');
```

Si se pasa `null` (modo actual), el envío se simula para efectos de demo.

## Stack sugerido

- Go 1.25 + Gin (alineado con el backend principal de NotarIA)
- PostgreSQL compartido o SQLite local para leads de marketing
- Mismo esquema de CORS que el sistema principal

Esto se implementará en una fase posterior del proyecto SaaS.
