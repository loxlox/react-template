import React, { useState } from 'react'
// import { useRouter } from 'next/router'
import { Avatar, Dropdown, Layout } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import CustomBreadcrumb from '../breadcrumb'


function CustomHeader() {
  // const router = useRouter()
  const [current, setCurrent] = useState('')
  const items = [
    {
      icon: <UserOutlined />,
      key: 'profile',
      label: 'Profile'
    },
    {
      type: 'divider'
    },
    {
      icon: <LogoutOutlined />,
      key: 'logout',
      label: 'Logout'
    }
  ]
  const menuClick = params => {
    const { key, domEvent } = params
    switch (key) {
      case 'logout':
        setCurrent(key)
        handleLogout(domEvent)
        break;
      default: break;
    }
  }
  const handleLogout = evt => {
    evt.preventDefault()
    localStorage.clear()
    // router.push('/login')
  }

  return (
    <Layout.Header>
      <CustomBreadcrumb />
      <Dropdown menu={{
        items,
        selectedKeys: [current],
        onClick: params => menuClick(params)
      }}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Layout.Header>
  )
}

export default CustomHeader
