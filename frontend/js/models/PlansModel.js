// ============================================================
// Model: Pricing plans
// Todos los precios en MXN. `monthly` y `yearly` son mensuales
// (yearly ya con el descuento aplicado: 2 meses gratis = -16%).
// ============================================================

export const plansModel = [
  {
    id: 'esencial',
    name: 'Esencial',
    description: 'Para notarías que inician su proceso de digitalización.',
    monthly: 3499,
    yearly: 2916,
    setup: 35000,
    badge: null,
    featured: false,
    ctaStyle: 'secondary',
    features: [
      'Hasta 5 usuarios',
      '1 oficina',
      'Expedientes ilimitados',
      'Catálogo de actos estándar',
      'Comentarios en tiempo real',
      'Respaldos semanales',
      'Soporte por correo',
    ],
  },
  {
    id: 'profesional',
    name: 'Profesional',
    description: 'Para notarías en pleno crecimiento con equipo consolidado.',
    monthly: 6499,
    yearly: 5416,
    setup: 55000,
    badge: 'Más elegido',
    featured: true,
    ctaStyle: 'primary',
    features: [
      'Hasta 20 usuarios',
      'Hasta 2 oficinas',
      'Todo lo de Esencial',
      'Catálogo de actos personalizado',
      'Dashboard ejecutivo con cache Redis',
      'Auditoría avanzada + exportables',
      'Push notifications (Firebase)',
      'Respaldos diarios',
      'Soporte prioritario WhatsApp',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para notarías multi-oficina o con alto volumen de actos.',
    monthly: 12999,
    yearly: 10832,
    setup: 'a medida',
    badge: null,
    featured: false,
    ctaStyle: 'secondary',
    features: [
      'Usuarios ilimitados',
      'Oficinas ilimitadas',
      'Todo lo de Profesional',
      'Integraciones a medida (SAT / RPP)',
      'SLA de 99.9% de disponibilidad',
      'Respaldos cada 6 horas',
      'Capacitación continua',
      'Gerente de cuenta dedicado',
      'Soporte 24/7',
    ],
  },
];
