import { useState } from 'react'
// import { useRouter } from 'next/router'
import { Layout, Menu } from 'antd'
import { DashboardOutlined } from '@ant-design/icons'

function CustomSider() {
  // const router = useRouter()
  const [current, setCurrent] = useState('dashboard')
  const handleMenuClick = params => {
    setCurrent(params.key === '' ? 'dashboard' : params.key)
    // router.push(`/${params.key}`)
  }
  const items = [
    {
      icon: <DashboardOutlined />,
      key: 'dashboard',
      label: 'Dashboard',
    }
  ]

  return (
    <>
      <Layout.Sider theme="light" width="250">
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={[current]}
          onClick={params => handleMenuClick(params)}
        />
      </Layout.Sider>
    </>
  )
}

export default CustomSider