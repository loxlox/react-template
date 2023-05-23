import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout'
import Dashboard from '../pages/dashboard'

function Routes() {
  return createBrowserRouter([
    {
      path: '/',
      element: Layout(Dashboard),
    },
  ])
}

export default Routes;
