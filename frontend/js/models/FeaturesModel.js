// ============================================================
// Model: Features
// Estructura de las tarjetas que se muestran en "Qué ofrecemos".
// Cada feature: { id, icon (svg path string), title, description, tag }
// ============================================================

export const featuresModel = [
  {
    id: 'expedientes',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>',
    title: 'Expedientes con ciclo de vida',
    description: 'Cree, asigne, comente y apruebe expedientes con estados auditables: pendiente, en progreso, en revisión, aprobado o rechazado.',
    tag: 'Núcleo',
  },
  {
    id: 'actos',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
    title: 'Catálogo de actos y requisitos',
    description: 'Administre su catálogo de actos con requisitos por cada uno. Alta, baja y desactivación inteligente según historial.',
    tag: 'Personalizable',
  },
  {
    id: 'documentos',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>',
    title: 'Documentos optimizados',
    description: 'Subida, reemplazo y descarga autenticada. PDFs linearizados y comprimidos automáticamente con pdfcpu.',
    tag: 'PDF inteligente',
  },
  {
    id: 'tiempo-real',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>',
    title: 'Comentarios en tiempo real',
    description: 'Chat WebSocket por expediente. Los proyectistas colaboran sin salir del sistema ni depender de WhatsApp.',
    tag: 'WebSocket',
  },
  {
    id: 'notificaciones',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>',
    title: 'Notificaciones unificadas',
    description: 'Centro de notificaciones in-app con SSE, más push opcional con Firebase. Nada se escapa al notario.',
    tag: 'SSE + Push',
  },
  {
    id: 'asistencia',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    title: 'Control de asistencia',
    description: 'Check-in y check-out del personal con historial auditable. Un turno por día, sin marcajes duplicados.',
    tag: 'RRHH',
  },
  {
    id: 'dashboard',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>',
    title: 'Dashboard ejecutivo',
    description: 'KPIs, tendencias, distribución por estado, top proyectistas y top actos. Con cache Redis para respuestas al instante.',
    tag: 'Analítica',
  },
  {
    id: 'auditoria',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
    title: 'Auditoría completa',
    description: 'Bitácora de cada acción: quién, qué, cuándo y desde dónde. Búsqueda avanzada y métricas al minuto.',
    tag: 'Trazable',
  },
  {
    id: 'roles',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>',
    title: 'Roles y oficinas',
    description: 'Super-admin, admin local, proyectista y captura. Asignación por oficina, permisos granulares y bloqueo de acciones.',
    tag: 'Multi-oficina',
  },
];
