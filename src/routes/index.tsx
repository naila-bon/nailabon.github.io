import { createRoute } from '@tanstack/react-router'
import { Route } from './__root'
import { HomePage } from '../components/HomePage'

export const indexRoute = createRoute({
  getParentRoute: () => Route,
  path: '/',
  component: HomePage,
})