import React from 'react'
import { Layout } from 'antd'
import CustomSider from '../components/sider'
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'


function FullLayout() {
  return (
    <Layout>
      <CustomSider />
      <Layout className="site-layout">
        <CustomHeader />
        <Layout.Content className="site-layout-background">
          crot.
        </Layout.Content>
        <CustomFooter />
      </Layout>
    </Layout>
  )
}

export default FullLayout