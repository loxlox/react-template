import React from 'react'
import { RouterLayout } from './layout'
import Login from '../pages/login'
import ForgotPassword from '../pages/forgot-password'
import Dashboard from '../pages/dashboard'
import Profile from '../pages/profile'

const Routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/',
    element: RouterLayout(Dashboard),
  },
  {
    path: '/profile',
    element: RouterLayout(Profile),
  },
]

export default Routes
