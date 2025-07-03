import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>App Layout

    <h2>Routes</h2>
    <li>
      <Link to="/app/dashboard">/app/dashboard</Link>
    </li>
    <Outlet/>
  </div>
}
