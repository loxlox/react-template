import React from 'react'
import { Breadcrumb } from 'antd'
import { HomeOutlined, RightOutlined } from '@ant-design/icons'
import { capitalizeFirstLetter } from '../../services/helpers'


function CustomBreadcrumb() {
  // const path = router.asPath
  // const title = () => {
  //   const pathName = router.asPath.slice(1)
  //   if (pathName.includes('-')) {
  //     const removeSeparator = pathName.split('-')
  //     let newArr = []
  //     for (let i = 0; i < removeSeparator.length; i++) {
  //       const item = removeSeparator[i]
  //       newArr.push(capitalizeFirstLetter(item))
  //     }

  //     return newArr.join(' ')
  //   }
  //   return capitalizeFirstLetter(pathName)
  // }
  // const items = title() === '' ? [
  //   {
  //     href: path,
  //     title: <HomeOutlined />,
  //   }
  // ] : [
  //   {
  //     href: path,
  //     title: <HomeOutlined />,
  //   },
  //   {
  //     href: path,
  //     title: title(),
  //   }
  // ]

  return (
    // <Breadcrumb
    //   items={items}
    //   separator={<RightOutlined style={{ fontSize: 10 }} />}
    // />
    <>this is breadcrumb.</>
  )
}

export default CustomBreadcrumb
