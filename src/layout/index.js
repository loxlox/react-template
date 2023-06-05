import React from 'react'
import { Layout } from 'antd'
import CustomSider from '../components/sider'
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'


function LayoutComponent({children}) {
  return (
    <Layout hasSider>
      <CustomSider />
      <Layout>
        <CustomHeader />
        <Layout.Content>
          {children}
        </Layout.Content>
        <CustomFooter />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent