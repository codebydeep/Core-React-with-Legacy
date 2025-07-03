import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products"!
    <Link to="/Product/1">Go to Product 1</Link>
    <br />
    <Link to="/Product/2">Go to Product 2</Link>
    <br />
    <Link to="/Product/3">Go to Product 3</Link>
    <br />
  </div>
}
