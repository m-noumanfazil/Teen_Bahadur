export interface ShuttleRouteSummary {
  id: string;
  name: string;
  morningDeparture: string;
  origin: string;
  destination: string;
}

// Lightweight summary, derived from NEDUET_Shuttle_Points_and_Routes.md
export const SHUTTLE_ROUTES: ShuttleRouteSummary[] = [
  {
    id: '1',
    name: 'Route 1 – City Campus to Main Campus',
    morningDeparture: '7:40 a.m.',
    origin: 'City Campus',
    destination: 'NEDUET (Main Campus)',
  },
  {
    id: '2',
    name: 'Route 2 – Paposh / Nazimabad to Main Campus',
    morningDeparture: '7:40 a.m.',
    origin: 'Paposh',
    destination: 'NEDUET (Main Campus)',
  },
  {
    id: '4',
    name: 'Route 4 – Korangi to Main Campus',
    morningDeparture: '7:20 a.m.',
    origin: 'Korangi (No. 5)',
    destination: 'NEDUET (Main Campus)',
  },
  {
    id: '5',
    name: 'Route 5 – 4K / Nagan to Main Campus',
    morningDeparture: '7:40 a.m.',
    origin: '4K Chowrangi',
    destination: 'NEDUET (Main Campus)',
  },
  {
    id: '6',
    name: 'Route 6 – Shah Faisal / Landhi to Main Campus',
    morningDeparture: '7:05 a.m.',
    origin: 'Shama Shopping Centre',
    destination: 'NED Main Campus',
  },
  {
    id: '7',
    name: 'Route 7 – Orangi to Main Campus',
    morningDeparture: '7:25 a.m.',
    origin: 'Islam Chowk (Orangi No. 5)',
    destination: 'NEDUET (Main Campus)',
  },
  {
    id: '8',
    name: 'Route 8 – Punjab Chowrangi / Defence to Main Campus',
    morningDeparture: '7:00 a.m.',
    origin: 'Punjab Chowrangi',
    destination: 'NEDUET (Main Campus)',
  },
];
