import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Layout } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import CustomBreadcrumb from "../breadcrumb";

function CustomHeader() {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const items = [
    {
      icon: <UserOutlined />,
      key: "profile",
      label: "Profile",
    },
    {
      type: "divider",
    },
    {
      icon: <LogoutOutlined />,
      key: "logout",
      label: "Logout",
    },
  ];
  const menuClick = (params) => {
    const { key, domEvent } = params;
    switch (key) {
      case "logout":
        setCurrent(key);
        handleLogout(domEvent);
        break;
      default:
        setCurrent(key);
        navigate(`/${key}`);
        break;
    }
  };
  const handleLogout = (evt) => {
    evt.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Layout.Header>
      <CustomBreadcrumb />
      <Dropdown
        menu={{
          items,
          selectedKeys: [current],
          onClick: (params) => menuClick(params),
        }}
      >
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </Layout.Header>
  );
}

export default CustomHeader;
