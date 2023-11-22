import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import { MdClose, MdMenu, MdOutlineSpaceDashboard } from "react-icons/md";

function CustomSider() {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const handleMenuClick = (params) => {
    setCurrent(params.key === "" ? "dashboard" : params.key);
    navigate(params.key === "dashboard" ? "/" : `/${params.key}`);
  };
  const items = [
    {
      icon: <MdOutlineSpaceDashboard />,
      key: "dashboard",
      label: "Dashboard",
    },
  ];

  return (
    <>
      <Layout.Sider
        theme="light"
        width="300"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="sider-top-wrapper">
          <Button
            type="text"
            icon={collapsed ? <MdMenu /> : <MdClose />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={[current]}
          onClick={(params) => handleMenuClick(params)}
        />
      </Layout.Sider>
    </>
  );
}

export default CustomSider;
