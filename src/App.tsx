import type { ShuttleRouteSummary } from './data/routesSummary';
import { SHUTTLE_ROUTES } from './data/routesSummary';

export function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">NEDUET Shuttle</h1>
        <p className="app-subtitle">Teen Bahadur 
          <span className="dot" aria-hidden="true">•</span>
          Mobile-style preview
        </p>
      </header>

      <main className="app-main">
        <section aria-label="Shuttle routes list" className="card">
          <h2 className="card-title">Morning routes</h2>
          <p className="card-helper">
            This is a basic mobile-style UI built from the shuttle markdown files. Later we
            can connect it to Supabase for real-time data and auth.
          </p>

          <ul className="routes-list">
            {SHUTTLE_ROUTES.map((route) => (
              <RouteRow key={route.id} route={route} />
            ))}
          </ul>
        </section>

        <section aria-label="Supabase status" className="card card-muted">
          <h2 className="card-title">Supabase connection</h2>
          <p className="card-helper">
            Supabase is not required for this demo. To actually connect a database and auth
            later, add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>
            {' '}in your environment. The UI is already structured to call Supabase from a
            single <code>supabaseClient</code> helper.
          </p>
        </section>
      </main>
    </div>
  );
}

function RouteRow({ route }: { route: ShuttleRouteSummary }) {
  return (
    <li className="route-row">
      <div className="route-main">
        <div className="route-line">
          <span className="route-id">#{route.id}</span>
          <span className="route-name">{route.name}</span>
        </div>
        <div className="route-meta">
          <span className="badge-time">{route.morningDeparture}</span>
          <span className="route-path">
            {route.origin} 
            <span aria-hidden="true" className="arrow">→</span> {route.destination}
          </span>
        </div>
      </div>
    </li>
  );
}
