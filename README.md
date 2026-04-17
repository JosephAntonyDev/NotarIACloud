# NotarIA Cloud · Landing SaaS

Landing page comercial del sistema SaaS de gestión notarial **NotarIA Cloud**. Construida en **HTML + JS vanilla** (sin frameworks) con arquitectura **MVC** y Tailwind vía CDN para agilizar la presentación a inversionistas.

## Estructura del proyecto

```
notarial_saas_landing/
├── api/                    # Placeholder del backend público
│   └── README.md
└── frontend/
    ├── index.html          # Entrypoint: marcado de todas las secciones
    ├── assets/
    │   └── images/
    │       ├── logo.svg    # Logo NotarIA (isotipo dorado)
    │       └── grain.svg   # Textura sutil del hero
    ├── css/
    │   ├── main.css        # Variables, layout, cards, pricing, partners
    │   └── animations.css  # reveal-on-scroll, floats, pulses, hero orbs
    └── js/
        ├── app.js                      # Entry point / bootstrap MVC
        ├── models/
        │   ├── FeaturesModel.js        # "Qué ofrecemos"
        │   ├── InstallationModel.js    # Pasos de la implementación
        │   ├── PartnersModel.js        # Notarías asociadas (178 Chiapas)
        │   └── PlansModel.js           # Planes mensual / anual
        ├── views/
        │   ├── FeaturesView.js
        │   ├── InstallationView.js
        │   ├── PartnersView.js
        │   └── PlansView.js
        └── controllers/
            ├── CounterController.js    # Contadores animados del hero
            ├── FeaturesController.js
            ├── FormController.js       # Envío del formulario de contacto
            ├── InstallationController.js
            ├── NavController.js        # Navbar sticky, menú, scroll progress
            ├── PartnersController.js
            ├── PlansController.js      # Toggle mensual/anual
            └── RevealController.js     # reveal-on-scroll con IntersectionObserver
```

## Cómo correrla

No requiere build. Solo necesita un servidor HTTP estático:

```bash
# opción 1: Python (cualquier 3.x)
cd frontend
python -m http.server 5500

# opción 2: Node
npx serve frontend -l 5500

# opción 3: VSCode Live Server
# click derecho sobre frontend/index.html → "Open with Live Server"
```

Luego abra `http://localhost:5500`.

> ⚠ Debe servirse por HTTP, no con `file://`, porque `app.js` usa `import` (módulos ES).

## Paleta y tipografía

| Token            | Color     | Uso                              |
| ---------------- | --------- | -------------------------------- |
| `primary-600`    | `#740A03` | Acentos, CTAs, gradientes        |
| `primary-700/800`| `#5c0802` / `#440501` | Hero dark                |
| `gold-500`       | `#c07d30` | Logo, detalles notariales        |
| `gold-400`       | `#e2c67c` | Resaltados, halos                |
| `ink-900`        | `#14100b` | Texto principal / bg oscuro      |

- **Serif** (encabezados): Playfair Display
- **Sans** (cuerpo / UI): Inter

## Secciones de la landing

1. **Hero** — claim, stats animados, mock de dashboard flotante y tarjetas de notificación / VPN.
2. **Barra de confianza** — stack técnico (PostgreSQL, Go, Redis…).
3. **Qué ofrecemos** — 9 cards de features (expedientes, actos, documentos, comentarios en vivo, etc.).
4. **Qué facilitamos** — timeline del expediente y bubble de métrica clave.
5. **Seguridad** — diagrama dispositivo → VPN → servidor local + 8 cards de garantías.
6. **Instalación** — 4 fases en 7 días + caja de "todo lo incluido".
7. **Planes** — 3 planes con toggle mensual/anual y costo de instalación único.
8. **Notarías asociadas** — **Notaría 178 de Chiapas** como fundador + slots en disco para crecimiento.
9. **Contacto** — tarjeta de datos + formulario de solicitud de demo.
10. **Footer** — links, año dinámico, aviso.

## Decisiones de arquitectura

- **MVC vanilla, no framework**: los models son sólo arrays/JSON, las views renderizan HTML strings y los controllers orquestan + escuchan eventos.
- **Render dinámico primero, reveal después**: `app.js` monta `FeaturesController`, `InstallationController`, `PlansController` y `PartnersController` *antes* de `RevealController` para que los `.reveal` generados dinámicamente sí se observen.
- **Tailwind vía CDN**: evita un paso de build para esta demo; los estilos de componentes custom viven en `css/main.css` (coexiste sin conflicto).
- **IntersectionObserver** para reveals, contadores y active link del nav — sin librerías extra.
- **Accesibilidad**: respeta `prefers-reduced-motion` y linka los CTAs a `#contacto` para flujo consistente.

## Conectar el formulario a una API real

En `js/app.js` cambie:

```js
new FormController('#contactForm', null);
```

por el endpoint real (ver `api/README.md`):

```js
new FormController('#contactForm', 'http://localhost:3001/api/contact');
```

## Demo para inversionistas — checklist

- [x] Servidor local levantado en `http://localhost:5500`
- [x] Verificar que el logo dorado se vea bien en el navbar y footer
- [x] Confirmar que el toggle de planes mensual/anual anima bien
- [x] Confirmar que la sección de Notarías Asociadas muestra la 178 de Chiapas
- [x] Probar el scroll: las secciones deben entrar con fade-up al viewport

Preparado con ❤ para presentar al siguiente grupo de notarías.
