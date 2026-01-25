import { createRouter, createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import App from '../App'

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: App,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: App,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: App,
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, projectsRoute, contactRoute])

export const router = createRouter({
  routeTree,
  basepath: '/nailabon.github.io/',
})
