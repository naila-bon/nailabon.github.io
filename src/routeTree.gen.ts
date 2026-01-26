import { createRouter } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'
import { indexRoute } from './routes/index'

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({
  routeTree,
})
