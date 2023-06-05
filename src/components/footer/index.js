import React from 'react'
import { Layout } from 'antd'


function CustomFooter() {
  return (
    <Layout.Footer>
      ©{new Date().getFullYear()}
    </Layout.Footer>
  )
}

export default CustomFooter