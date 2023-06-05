import React from 'react'
import LayoutComponent from '../layout'

export const RouterLayout = (ComposedComponent) => {
  return (
    <LayoutComponent>
      <ComposedComponent />
    </LayoutComponent>
  )
}
