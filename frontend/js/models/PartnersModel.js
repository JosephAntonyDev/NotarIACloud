// ============================================================
// Model: Notarías asociadas
// La Notaría 178 de Chiapas es, de momento, la única asociada.
// Los slots vacíos se muestran como "próximamente" para proyectar
// crecimiento ante inversionistas.
// ============================================================

export const partnersModel = [
  {
    id: 'notaria-178',
    type: 'active',
    number: '178',
    name: 'Notaría Pública No. 178',
    location: 'Chiapas, México',
    holder: 'Lic. Titular de la Notaría 178',
    since: '2024',
    stats: [
      { value: '+', label: 'Expedientes activos', raw: 'Operando' },
      { value: '24/7', label: 'Disponibilidad' },
    ],
    badge: 'Fundador',
    initials: '178',
  },
  {
    id: 'empty-1',
    type: 'empty',
    emptyTitle: 'La siguiente notaría asociada',
    emptyMessage: '¿Representa a una notaría? Únase a NotarIA Cloud y gane visibilidad en nuestra red.',
  },
  {
    id: 'empty-2',
    type: 'empty',
    emptyTitle: 'Espacio reservado',
    emptyMessage: 'Estamos cerrando convenios con notarías de todo México. Pronto más aliados.',
  },
];
