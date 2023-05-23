import React from 'react'
import FullLayout from '../layout'

export const Layout = (ComposedComponent) => {
  return (
    <FullLayout>
      <ComposedComponent />
    </FullLayout>
  )
}
