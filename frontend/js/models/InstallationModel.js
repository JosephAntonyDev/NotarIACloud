// ============================================================
// Model: Fases de la instalación llave-en-mano.
// Cada paso mapea a un día aproximado dentro de los 7 días de roll-out.
// ============================================================

export const installationModel = [
  {
    step: 1,
    title: 'Diagnóstico y kick-off',
    description: 'Visita técnica, levantamiento de requerimientos, revisión de infraestructura y acuerdo de ventanas de trabajo.',
    duration: 'Día 1',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    step: 2,
    title: 'Despliegue local + VPN',
    description: 'Instalación del servidor, despliegue de la API (Go + PostgreSQL + Redis) y configuración de la VPN institucional.',
    duration: 'Día 2 – 3',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7"/>',
  },
  {
    step: 3,
    title: 'Migración y catálogo',
    description: 'Alta de oficinas, carga del catálogo base de actos y requisitos, migración de expedientes históricos si aplica.',
    duration: 'Día 3 – 5',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>',
  },
  {
    step: 4,
    title: 'Capacitación y go-live',
    description: 'Alta de usuarios, capacitación de 8 horas por rol, simulaciones de expedientes y arranque oficial con soporte en sitio.',
    duration: 'Día 6 – 7',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
  },
];
